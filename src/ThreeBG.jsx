import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBG() {
  const mountRef = useRef();

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.width = "100vw";
    renderer.domElement.style.height = "100vh";
    renderer.domElement.style.zIndex = 0;
    renderer.domElement.style.opacity = 0.5;
    renderer.domElement.style.pointerEvents = "none";

    if (mountRef.current && !mountRef.current.hasChildNodes()) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Geometry (animated points)
    const geometry = new THREE.BufferGeometry();
    const numPoints = 120;
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0x6a11cb,
      size: 0.18,
      opacity: 0.7,
      transparent: true,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation loop with scroll speed displacement
    let frameId;
    let lastScrollY = window.scrollY || window.pageYOffset;
    let cameraOffsetY = 0;

    const animate = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const scrollSpeed = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Move camera by scroll speed (damped for smoothness)
      cameraOffsetY += scrollSpeed * 0.08; // Adjust multiplier for effect strength
      cameraOffsetY *= 0.92; // Damping for smooth return

      camera.position.y = cameraOffsetY;

      points.rotation.y += 0.002 + Math.abs(scrollSpeed) * 0.0001;
      points.rotation.x += 0.001 + Math.abs(scrollSpeed) * 0.00005;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

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
      renderer.dispose();
      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}