import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeHeroBg() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent
    mountRef.current.appendChild(renderer.domElement);

    // Helix group
    const helix = new THREE.Group();
    const turns = 3;
    const points = 100;
    const radius = 1.7;
    const heightHelix = 3;

    for (let i = 0; i < points; i++) {
      const theta = turns * 2 * Math.PI * (i / points);
      const y = heightHelix * (i / points) - heightHelix / 2;
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);

      const sphereGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0x6a11cb,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x2575fc,
        emissiveIntensity: 0.2,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(x, y, z);
      helix.add(sphere);
    }
    scene.add(helix);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation loop (slow rotation)
    let frameId;
    const animate = () => {
      helix.rotation.y += 0.003; // slower rotation
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (
        renderer &&
        renderer.domElement &&
        mountRef.current?.contains(renderer.domElement)
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
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}



