"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Custom shader for the wave effect
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#2a3b50") }, // Base color
    }),
    []
  );

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Wave equation
      float elevation = sin(pos.x * 2.0 + uTime) * 0.2 
                      + sin(pos.y * 1.5 + uTime * 0.5) * 0.2;
                      
      pos.z += elevation;
      vElevation = elevation;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    varying float vElevation;

    void main() {
      // Slight color variation based on elevation for depth
      vec3 color = uColor + vElevation * 0.1; 
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useFrame((state) => {
    if (meshRef.current) {
      // Update time uniform
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime() * 0.5; // Speed
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, 0, -2]}>
      <planeGeometry args={[15, 10, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={false} // Set to true if you want the wireframe look
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
