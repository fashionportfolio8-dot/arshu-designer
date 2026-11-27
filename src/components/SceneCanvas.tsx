"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function TextileSculpture() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.12;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, state.pointer.y * 0.12, 0.025);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, -state.pointer.x * 0.1, 0.025);
  });
  return <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.45}>
    <mesh ref={mesh} scale={[1.55, 1.9, .55]} position={[.65, -.05, 0]}>
      <torusKnotGeometry args={[.72, .22, 220, 32, 2, 5]}/>
      <MeshDistortMaterial color="#b7a184" roughness={.38} metalness={.22} distort={.22} speed={1.3}/>
    </mesh>
  </Float>;
}

export default function SceneCanvas() {
  return <div className="absolute inset-0">
    <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={1.4}/>
      <directionalLight position={[3, 4, 5]} intensity={2.1}/>
      <pointLight position={[-3, -2, 2]} intensity={1.2} color="#d8c6a6"/>
      <TextileSculpture/>
      <Environment preset="studio"/>
    </Canvas>
  </div>;
}