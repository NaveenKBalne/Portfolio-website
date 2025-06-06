// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const ThreeBG = () => {
//   const mountRef = useRef(null);
//   const scrollSpeedRef = useRef(0);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 120; // Move camera further back
//     camera.lookAt(0, 0, 0);

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);

//     // Prevent duplicate canvas
//     while (mountRef.current.firstChild) {
//       mountRef.current.removeChild(mountRef.current.firstChild);
//     }
//     mountRef.current.appendChild(renderer.domElement);

//     // Helix geometry (horizontal)
//     const points = [];
//     const turns = 6;
//     const radius = 35; // Increased radius
//     const length = 100; // Increased length
//     const segments = 400;
//     for (let i = 0; i < segments; i++) {
//       const t = (i / segments) * Math.PI * 2 * turns;
//       const x = (i / segments - 0.5) * length;
//       const y = Math.cos(t) * radius;
//       const z = Math.sin(t) * radius;
//       points.push(new THREE.Vector3(x, y, z));
//     }
//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const material = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 3 });
//     const helix = new THREE.Line(geometry, material);
//     scene.add(helix);

//     // Animation loop
//     let frameId;
//     const animate = () => {
//       scrollSpeedRef.current *= 0.92;
//       helix.rotation.x += scrollSpeedRef.current * 0.02;
//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Scroll event handler
//     const onScroll = () => {
//       const newY = window.scrollY;
//       const delta = newY - lastScrollY.current;
//       scrollSpeedRef.current = delta;
//       lastScrollY.current = newY;
//     };
//     window.addEventListener("scroll", onScroll);

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", onScroll);
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: -1,
//         pointerEvents: "none",
//       }}
//     />
//   );
// };

// export default ThreeBG;

// Helix Three JS

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const ThreeBG = () => {
//   const mountRef = useRef(null);
//   const scrollSpeedRef = useRef(0);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 120;
//     camera.lookAt(0, 0, 0);

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0xfbbf24, 0);

//     // Ensure no duplicate canvas
//     while (mountRef.current.firstChild) {
//       mountRef.current.removeChild(mountRef.current.firstChild);
//     }
//     mountRef.current.appendChild(renderer.domElement);

//     // Helix geometry setup
//     const points = [];
//     const turns = 6;
//     const radius = 35;
//     const length = 100;
//     const segments = 400;
//     for (let i = 0; i < segments; i++) {
//       const t = (i / segments) * Math.PI * 2 * turns;
//       const x = (i / segments - 0.5) * length;
//       const y = Math.cos(t) * radius;
//       const z = Math.sin(t) * radius;
//       points.push(new THREE.Vector3(x, y, z));
//     }

//     const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     const material = new THREE.LineBasicMaterial({ color: 0xfbbf24, linewidth: 3 });
//     const helix = new THREE.Line(geometry, material);
//     scene.add(helix);

//     // Animation loop
//     let frameId;
//     const animate = () => {
//       scrollSpeedRef.current *= 0.92;

//       // Rotate continuously while modifying speed based on scrolling
//       helix.rotation.x += scrollSpeedRef.current * 0.02;
//       helix.rotation.y += 0.02; // Constant spinning

//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Scroll event handler
//     const onScroll = () => {
//       const newY = window.scrollY;
//       const delta = newY - lastScrollY.current;
//       scrollSpeedRef.current = delta;
//       lastScrollY.current = newY;
//     };
//     window.addEventListener("scroll", onScroll);

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", onScroll);
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 1,
//         pointerEvents: "none",
//       }}
//     />
//   );
// };

// export default ThreeBG;

// Black Hole

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// export default function BlackHoleScene() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Scene, Camera, Renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 6;

//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x000000, 0); // Transparent background
//     mountRef.current.appendChild(renderer.domElement);

//     // Black Hole - Sphere
//     const blackHoleGeometry = new THREE.SphereGeometry(1, 32, 32);
//     const blackHoleMaterial = new THREE.MeshStandardMaterial({
//       color: 0x000000,
//       metalness: 1,
//       roughness: 0,
//     });
//     const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
//     scene.add(blackHole);

//     // Accretion Disk - Torus
//     const diskGeometry = new THREE.TorusGeometry(1.6, 0.3, 16, 100);
//     const diskMaterial = new THREE.MeshBasicMaterial({
//       color: 0xff6600,
//       emissive: 0xff6600,
//       emissiveIntensity: 0.6,
//       wireframe: false,
//     });
//     const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
//     accretionDisk.rotation.x = Math.PI / 2;
//     scene.add(accretionDisk);

//     // Add Background Stars
//     const starsGeometry = new THREE.BufferGeometry();
//     const starsVertices = [];
//     for (let i = 0; i < 500; i++) {
//       starsVertices.push(
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50
//       );
//     }
//     starsGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starsVertices, 3)
//     );
//     const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
//     const stars = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(stars);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xff6600, 1.4);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     // Animation loop - Rotation effect
//     let frameId;
//     const animate = () => {
//       accretionDisk.rotation.z += 0.01; // Spinning disk effect
//       stars.rotation.y += 0.001; // Slow movement of stars
//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Handle resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       if (
//         renderer &&
//         renderer.domElement &&
//         mountRef.current?.contains(renderer.domElement)
//       ) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//       aria-hidden="true"
//     />
//   );
// }











// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// export default function BlackHoleScene() {
//   const mountRef = useRef(null);
//   const scrollSpeedRef = useRef(0);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 6); // Adjusted for better perspective

//     const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x09031f); // Deep space background
//     mountRef.current.appendChild(renderer.domElement);

//     // Black Hole Sphere
//     const blackHoleGeometry = new THREE.SphereGeometry(1, 64, 64);
//     const blackHoleMaterial = new THREE.MeshStandardMaterial({
//       color: 0x000000,
//       metalness: 1,
//       roughness: 0,
//     });
//     const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);

//     // Accretion Disk (Swirling Torus)
//     const diskGeometry = new THREE.TorusGeometry(1.8, 0.3, 16, 100);
//     const diskMaterial = new THREE.MeshStandardMaterial({
//       color: 0xff6600,
//       emissive: 0xff4500,
//       emissiveIntensity: 1,
//     });
//     const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
//     accretionDisk.rotation.x = Math.PI / 2; // Horizontal position

//     // Grouping all objects for tilting effect
//     const blackHoleGroup = new THREE.Group();
//     blackHoleGroup.add(blackHole);
//     blackHoleGroup.add(accretionDisk);
//     scene.add(blackHoleGroup);

//     // Tilt system to 45 degrees
//     blackHoleGroup.rotation.x = THREE.MathUtils.degToRad(45);

//     // Background Stars
//     const starGeometry = new THREE.BufferGeometry();
//     const starVertices = [];
//     for (let i = 0; i < 500; i++) {
//       starVertices.push(
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50,
//         (Math.random() - 0.5) * 50
//       );
//     }
//     starGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starVertices, 3)
//     );
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xff6600, 1.5);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     // Orbit Controls (for slight user interaction)
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;

//     // Animation Loop
//     let frameId;
//     const animate = () => {
//       scrollSpeedRef.current *= 0.92; // Dampen scroll speed over time

//       // Rotate accretion disk faster when scrolling
//       accretionDisk.rotation.z += 0.01 + scrollSpeedRef.current * 0.002;

//       blackHoleGroup.rotation.y += 0.003; // Slow rotation of the black hole

//       stars.rotation.y += 0.001; // Slight star drift
//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Scroll Event Handling
//     const onScroll = () => {
//       const newY = window.scrollY;
//       const delta = newY - lastScrollY.current;
//       scrollSpeedRef.current = delta * 0.02; // Adjust rotation speed based on scroll
//       lastScrollY.current = newY;
//     };
//     window.addEventListener("scroll", onScroll);

//     // Handle Resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", onScroll);
//       if (renderer && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//       aria-hidden="true"
//     />
//   );
// }













// // the Real black hole

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// export default function BlackHoleScene() {
//   const mountRef = useRef(null);
//   const scrollSpeedRef = useRef(0);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 7); // Adjusted for better depth

//     const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x09031f); // Deep space background
//     mountRef.current.appendChild(renderer.domElement);

//     // Black Hole Sphere
//     const blackHoleGeometry = new THREE.SphereGeometry(1.5, 64, 64);
//     const blackHoleMaterial = new THREE.MeshStandardMaterial({
//       color: 0x000000,
//       metalness: 1,
//       roughness: 0,
//     });
//     const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);

//     // Accretion Disk (Swirling Plasma Effect)
//     const diskGeometry = new THREE.TorusGeometry(2, 0.4, 16, 100);
//     const diskMaterial = new THREE.MeshStandardMaterial({
//       color: 0xff6600,
//       emissive: 0xff4500,
//       emissiveIntensity: 1.5,
//     });
//     const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
//     accretionDisk.rotation.x = Math.PI / 2; // Horizontal rotation

//     // Cosmic Glow Effect (Ring around Black Hole)
//     const glowGeometry = new THREE.TorusGeometry(2.4, 0.2, 16, 100);
//     const glowMaterial = new THREE.MeshBasicMaterial({
//       color: 0xff9900,
//       opacity: 0.8,
//       transparent: true,
//     });
//     const glowRing = new THREE.Mesh(glowGeometry, glowMaterial);
//     glowRing.rotation.x = Math.PI / 2;

//     // Grouping all objects for tilt effect
//     const blackHoleGroup = new THREE.Group();
//     blackHoleGroup.add(blackHole);
//     blackHoleGroup.add(accretionDisk);
//     blackHoleGroup.add(glowRing);
//     scene.add(blackHoleGroup);

//     // Tilt system to 45 degrees
//     blackHoleGroup.rotation.x = THREE.MathUtils.degToRad(45);

//     // Background Stars
//     const starGeometry = new THREE.BufferGeometry();
//     const starVertices = [];
//     for (let i = 0; i < 1000; i++) {
//       starVertices.push(
//         (Math.random() - 0.5) * 60,
//         (Math.random() - 0.5) * 60,
//         (Math.random() - 0.5) * 60
//       );
//     }
//     starGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starVertices, 3)
//     );
//     const starMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.15,
//     });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xff6600, 1.7);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     // Orbit Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;

//     // Animation Loop
//     let frameId;
//     const animate = () => {
//       scrollSpeedRef.current *= 0.95; // Smooth scroll effect

//       // Accretion disk speed affected by scroll motion
//       accretionDisk.rotation.z += 0.03 + scrollSpeedRef.current * 0.006;

//       // Glow effect rotating slightly for realism
//       glowRing.rotation.z += 0.005;

//       // Black hole subtle rotation
//       blackHoleGroup.rotation.y += 0.01;

//       // stars.rotation.y += 0.001; // Stars drifting slowly
//       stars.position.x += 0.001;
//       stars.position.y += Math.sin(Date.now() * 0.0001) * 0.02;

//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Scroll Event Handling
//     const onScroll = () => {
//       const newY = window.scrollY;
//       const delta = newY - lastScrollY.current;
//       scrollSpeedRef.current = delta * 0.02; // Adjust rotation speed dynamically
//       lastScrollY.current = newY;
//     };
//     window.addEventListener("scroll", onScroll);

//     // Handle Resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup (Prevents disappearing issues)
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", onScroll);
//       if (
//         renderer &&
//         renderer.domElement &&
//         mountRef.current?.contains(renderer.domElement)
//       ) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//       aria-hidden="true"
//     />
//   );
// }



















// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// export default function BlackHoleScene() {
//   const mountRef = useRef(null);
//   const scrollSpeedRef = useRef(0);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Scene Setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 8); // Adjusted for better depth

//     const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x09031f); // Deep space background
//     mountRef.current.appendChild(renderer.domElement);

//     // Black Hole Sphere
//     const blackHoleGeometry = new THREE.SphereGeometry(1.5, 64, 64);
//     const blackHoleMaterial = new THREE.MeshStandardMaterial({
//       color: 0x000000,
//       metalness: 1,
//       roughness: 0,
//     });
//     const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);

//     // Accretion Disk (Swirling Plasma Effect)
//     const diskGeometry = new THREE.TorusGeometry(2, 0.4, 16, 100);
//     const diskMaterial = new THREE.MeshStandardMaterial({
//       color: 0xff6600,
//       emissive: 0xff4500,
//       emissiveIntensity: 1.5,
//     });
//     const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
//     accretionDisk.rotation.x = Math.PI / 2; // Horizontal rotation

//     // Cosmic Glow Effect (Ring around Black Hole)
//     const glowGeometry = new THREE.TorusGeometry(2.4, 0.2, 16, 100);
//     const glowMaterial = new THREE.MeshBasicMaterial({
//       color: 0xff9900,
//       opacity: 0.8,
//       transparent: true,
//     });
//     const glowRing = new THREE.Mesh(glowGeometry, glowMaterial);
//     glowRing.rotation.x = Math.PI / 2;

//     // Grouping all objects for tilt & movement effects
//     const blackHoleGroup = new THREE.Group();
//     blackHoleGroup.add(blackHole);
//     blackHoleGroup.add(accretionDisk);
//     blackHoleGroup.add(glowRing);
//     scene.add(blackHoleGroup);

//     // Tilt system to 45 degrees
//     blackHoleGroup.rotation.x = THREE.MathUtils.degToRad(45);

//     // Background Stars
//     const starGeometry = new THREE.BufferGeometry();
//     const starVertices = [];
//     for (let i = 0; i < 1200; i++) {
//       starVertices.push(
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100
//       );
//     }
//     starGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starVertices, 3)
//     );
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xff6600, 1.7);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     // Orbit Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;

//     // Animation Loop
//     let frameId;
//     const animate = () => {
//       scrollSpeedRef.current *= 0.95; // Smooth scroll effect

//       // Accretion disk spin speed affected by scroll motion
//       accretionDisk.rotation.z += 0.02 + scrollSpeedRef.current * 0.005;

//       // Black hole rotates slowly for natural movement
//       blackHoleGroup.rotation.y += 0.005;

//       // Stars moving dynamically across the scene
//       stars.position.x += 0.001;
//       stars.position.y += Math.sin(Date.now() * 0.0001) * 0.02;
//       stars.rotation.y += 0.001;

//       // Floating motion for black hole movement
//       blackHoleGroup.position.x = Math.sin(Date.now() * 0.0005) * 2;
//       blackHoleGroup.position.y = Math.cos(Date.now() * 0.0005) * 1;

//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Scroll Event Handling
//     const onScroll = () => {
//       const newY = window.scrollY;
//       const delta = newY - lastScrollY.current;
//       scrollSpeedRef.current = delta * 0.02; // Adjust rotation speed dynamically
//       lastScrollY.current = newY;
//     };
//     window.addEventListener("scroll", onScroll);

//     // Handle Resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup (Prevents disappearing issues)
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", onScroll);
//       if (renderer && renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//       aria-hidden="true"
//     />
//   );
// }




















// black hole latest version

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// export default function BlackHoleScene() {
//   const mountRef = useRef(null);
//   const scrollSpeedRef = useRef(0);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Scene Setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 8); // Adjusted for better depth

//     const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x09031f); // Deep space background
//     mountRef.current.appendChild(renderer.domElement);

//     // Black Hole Sphere
//     const blackHoleGeometry = new THREE.SphereGeometry(1.5, 64, 64);
//     const blackHoleMaterial = new THREE.MeshStandardMaterial({
//       color: 0x000000,
//       metalness: 1,
//       roughness: 0,
//     });
//     const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);

//     // Accretion Disk (Swirling Plasma Effect)
//     const diskGeometry = new THREE.TorusGeometry(2, 0.4, 16, 100);
//     const diskMaterial = new THREE.MeshStandardMaterial({
//       color: 0xff6600,
//       emissive: 0xff4500,
//       emissiveIntensity: 1.5,
//     });
//     const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
//     accretionDisk.rotation.x = Math.PI / 2; // Horizontal rotation

//     // Cosmic Glow Effect (Ring around Black Hole)
//     const glowGeometry = new THREE.TorusGeometry(2.4, 0.2, 16, 100);
//     const glowMaterial = new THREE.MeshBasicMaterial({
//       color: 0xff9900,
//       opacity: 0.8,
//       transparent: true,
//     });
//     const glowRing = new THREE.Mesh(glowGeometry, glowMaterial);
//     glowRing.rotation.x = Math.PI / 2;

//     // Grouping all objects for tilt & movement effects
//     const blackHoleGroup = new THREE.Group();
//     blackHoleGroup.add(blackHole);
//     blackHoleGroup.add(accretionDisk);
//     blackHoleGroup.add(glowRing);
//     scene.add(blackHoleGroup);

//     // Tilt system to 45 degrees
//     blackHoleGroup.rotation.x = THREE.MathUtils.degToRad(45);

//     // Background Stars (Now rotating around the black hole)
//     const starsGroup = new THREE.Group();
//     const starGeometry = new THREE.SphereGeometry(0.08, 8, 8);
//     const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

//     for (let i = 0; i < 600; i++) {
//       const angle = Math.random() * Math.PI * 2;
//       const radius = 5 + Math.random() * 3;
//       const x = Math.cos(angle) * radius;
//       const z = Math.sin(angle) * radius;
//       const y = (Math.random() - 0.5) * 5;

//       const star = new THREE.Mesh(starGeometry, starMaterial);
//       star.position.set(x, y, z);
//       starsGroup.add(star);
//     }
//     scene.add(starsGroup);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xff6600, 1.7);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     // Orbit Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;

//     // Animation Loop
//     let frameId;
//     const animate = () => {
//       scrollSpeedRef.current *= 0.95; // Smooth scroll effect

//       // Accretion disk spin speed affected by scroll motion
//       accretionDisk.rotation.z += 0.02 + scrollSpeedRef.current * 0.005;

//       // Black hole rotates slowly for natural movement
//       blackHoleGroup.rotation.y += 0.005;

//       // Stars orbiting around the black hole
//       starsGroup.rotation.y += 0.005 + scrollSpeedRef.current * 0.002;

//       // Stars also move slightly to create depth perception
//       starsGroup.position.x = Math.sin(Date.now() * 0.0005) * 2;
//       starsGroup.position.y = Math.cos(Date.now() * 0.0005) * 1;

//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Scroll Event Handling
//     const onScroll = () => {
//       const newY = window.scrollY;
//       const delta = newY - lastScrollY.current;
//       scrollSpeedRef.current = delta * 0.02; // Adjust rotation speed dynamically
//       lastScrollY.current = newY;
//     };
//     window.addEventListener("scroll", onScroll);

//     // Handle Resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup (Prevents disappearing issues)
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", onScroll);
//       if (renderer && renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//       aria-hidden="true"
//     />
//   );
// }








// // Black hole with starts 
// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// export default function BlackHoleScene() {
//   const mountRef = useRef(null);
//   const scrollSpeedRef = useRef(0);
//   const lastScrollY = useRef(window.scrollY);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     // Scene Setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 8); // Adjusted for better depth

//     const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
//     renderer.setSize(width, height);
//     renderer.setClearColor(0x09031f); // Deep space background
//     mountRef.current.appendChild(renderer.domElement);

//     // Black Hole Sphere
//     const blackHoleGeometry = new THREE.SphereGeometry(1.5, 64, 64);
//     const blackHoleMaterial = new THREE.MeshStandardMaterial({
//       color: 0x000000,
//       metalness: 1,
//       roughness: 0,
//     });
//     const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);

//     // Accretion Disk (Swirling Plasma Effect)
//     const diskGeometry = new THREE.TorusGeometry(2, 0.4, 16, 100);
//     const diskMaterial = new THREE.MeshStandardMaterial({
//       color: 0xff6600,
//       emissive: 0xff4500,
//       emissiveIntensity: 1.5,
//     });
//     const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
//     accretionDisk.rotation.x = Math.PI / 2; // Horizontal rotation

//     // Cosmic Glow Effect (Ring around Black Hole)
//     const glowGeometry = new THREE.TorusGeometry(2.4, 0.2, 16, 100);
//     const glowMaterial = new THREE.MeshBasicMaterial({
//       color: 0xff9900,
//       opacity: 0.8,
//       transparent: true,
//     });
//     const glowRing = new THREE.Mesh(glowGeometry, glowMaterial);
//     glowRing.rotation.x = Math.PI / 2;

//     // Grouping all objects for tilt & movement effects
//     const blackHoleGroup = new THREE.Group();
//     blackHoleGroup.add(blackHole);
//     blackHoleGroup.add(accretionDisk);
//     blackHoleGroup.add(glowRing);
//     scene.add(blackHoleGroup);

//     // Tilt system to 45 degrees
//     blackHoleGroup.rotation.x = THREE.MathUtils.degToRad(45);

//     // Background Stars (Now orbiting around the black hole)
//     const starsGroup = new THREE.Group();
//     const starGeometry = new THREE.SphereGeometry(0.03, 8, 8); // **Smaller star size**
//     const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

//     for (let i = 0; i < 600; i++) {
//       const angle = Math.random() * Math.PI * 2;
//       const radius = 5 + Math.random() * 3;
//       const x = Math.cos(angle) * radius;
//       const z = Math.sin(angle) * radius;
//       const y = (Math.random() - 0.5) * 5;

//       const star = new THREE.Mesh(starGeometry, starMaterial);
//       star.position.set(x, y, z);
//       starsGroup.add(star);
//     }
//     scene.add(starsGroup);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
//     scene.add(ambientLight);
//     const pointLight = new THREE.PointLight(0xff6600, 1.7);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     // Orbit Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;

//     // Animation Loop
//     let frameId;
//     const animate = () => {
//       scrollSpeedRef.current *= 0.95; // Smooth scroll effect

//       // Accretion disk spin speed affected by scroll motion
//       accretionDisk.rotation.z += 0.02 + scrollSpeedRef.current * 0.005;

//       // Black hole rotates slowly for natural movement
//       blackHoleGroup.rotation.y += 0.005;

//       // Stars orbiting around the black hole dynamically
//       starsGroup.rotation.y += 0.005 + scrollSpeedRef.current * 0.002;

//       // Stars move subtly across space for depth
//       starsGroup.position.x = Math.sin(Date.now() * 0.0005) * 2;
//       starsGroup.position.y = Math.cos(Date.now() * 0.0005) * 1;

//       renderer.render(scene, camera);
//       frameId = requestAnimationFrame(animate);
//     };
//     animate();

//     // Scroll Event Handling
//     const onScroll = () => {
//       const newY = window.scrollY;
//       const delta = newY - lastScrollY.current;
//       scrollSpeedRef.current = delta * 0.02; // Adjust rotation speed dynamically
//       lastScrollY.current = newY;
//     };
//     window.addEventListener("scroll", onScroll);

//     // Handle Resize
//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup (Prevents disappearing issues)
//     return () => {
//       cancelAnimationFrame(frameId);
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", onScroll);
//       if (renderer && renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 0,
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//       aria-hidden="true"
//     />
//   );
// }

















import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function BlackHoleScene() {
  const mountRef = useRef(null);
  const scrollSpeedRef = useRef(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8); // Adjusted for better depth

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x09031f); // Deep space background
    mountRef.current.appendChild(renderer.domElement);

    // Black Hole Sphere
    const blackHoleGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const blackHoleMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 1,
      roughness: 0,
    });
    const blackHole = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);

    // Accretion Disk (Swirling Plasma Effect)
    const diskGeometry = new THREE.TorusGeometry(2, 0.4, 16, 100);
    const diskMaterial = new THREE.MeshStandardMaterial({
      color: 0xff6600,
      emissive: 0xff4500,
      emissiveIntensity: 1.5,
    });
    const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
    accretionDisk.rotation.x = Math.PI / 2; // Horizontal rotation

    // Cosmic Glow Effect (Ring around Black Hole)
    const glowGeometry = new THREE.TorusGeometry(2.4, 0.2, 16, 100);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9900,
      opacity: 0.8,
      transparent: true,
    });
    const glowRing = new THREE.Mesh(glowGeometry, glowMaterial);
    glowRing.rotation.x = Math.PI / 2;

    // Grouping all objects for tilt & movement effects
    const blackHoleGroup = new THREE.Group();
    blackHoleGroup.add(blackHole);
    blackHoleGroup.add(accretionDisk);
    blackHoleGroup.add(glowRing);
    scene.add(blackHoleGroup);

    // Tilt system to 45 degrees
    blackHoleGroup.rotation.x = THREE.MathUtils.degToRad(45);

    // Background Stars (Now orbiting around the black hole)
    const starsGroup = new THREE.Group();
    const starGeometry = new THREE.SphereGeometry(0.03, 8, 8); // **Smaller star size**
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 600; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 3;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 5;

      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(x, y, z);
      starsGroup.add(star);
    }
    scene.add(starsGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xff6600, 1.7);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Animation Loop (Spinning from Start)
    let frameId;
    // const animate = () => {
    //   scrollSpeedRef.current *= 0.95; // Smooth scroll effect

    //   // Accretion disk continuous spin (No need to scroll)
    //   accretionDisk.rotation.z += 0.02 + scrollSpeedRef.current * 0.005;

    //   // Black hole rotates continuously
    //   blackHoleGroup.rotation.y += 0.005;

    //   // Stars orbit around the black hole dynamically
    //   starsGroup.rotation.y += 0.003 + scrollSpeedRef.current * 0.002;

    //   // Stars also move slightly across space for depth
    //   starsGroup.position.x = Math.sin(Date.now() * 0.0005) * 2;
    //   starsGroup.position.y = Math.cos(Date.now() * 0.0005) * 1;

    //   renderer.render(scene, camera);
    //   frameId = requestAnimationFrame(animate);
    // };
    const animate = () => {
    scrollSpeedRef.current *= 0.92; // More subtle scroll influence

    // Accretion disk spins continuously with dynamic speed scaling
    accretionDisk.rotation.z += 0.05 + scrollSpeedRef.current * 0.008;

    // Black hole spins at a computer-speed animation rate
    blackHoleGroup.rotation.y += 0.03;

    // Stars orbit faster around the black hole while maintaining smoothness
    starsGroup.rotation.y += 0.007 + scrollSpeedRef.current * 0.004;

    // Stars move slightly across space for depth effect
    starsGroup.position.x = Math.sin(Date.now() * 0.0008) * 2;
    starsGroup.position.y = Math.cos(Date.now() * 0.0008) * 1;

    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
};

    animate();

    // Scroll Event Handling
    const onScroll = () => {
      const newY = window.scrollY;
      const delta = newY - lastScrollY.current;
      scrollSpeedRef.current = delta * 0.02; // Adjust rotation speed dynamically
      lastScrollY.current = newY;
    };
    window.addEventListener("scroll", onScroll);

    // Handle Resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup (Prevents disappearing issues)
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      if (renderer && renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
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
