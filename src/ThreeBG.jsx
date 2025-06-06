import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeBG = () => {
  const mountRef = useRef(null);
  const scrollSpeedRef = useRef(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 120; // Move camera further back
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Prevent duplicate canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Helix geometry (horizontal)
    const points = [];
    const turns = 6;
    const radius = 35; // Increased radius
    const length = 100; // Increased length
    const segments = 400;
    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * Math.PI * 2 * turns;
      const x = (i / segments - 0.5) * length;
      const y = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      points.push(new THREE.Vector3(x, y, z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 3 });
    const helix = new THREE.Line(geometry, material);
    scene.add(helix);

    // Animation loop
    let frameId;
    const animate = () => {
      scrollSpeedRef.current *= 0.92;
      helix.rotation.x += scrollSpeedRef.current * 0.02;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Scroll event handler
    const onScroll = () => {
      const newY = window.scrollY;
      const delta = newY - lastScrollY.current;
      scrollSpeedRef.current = delta;
      lastScrollY.current = newY;
    };
    window.addEventListener("scroll", onScroll);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ThreeBG;