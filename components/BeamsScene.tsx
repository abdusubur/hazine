"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Beams() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#7c3aed") },
    }),
    []
  );

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;

    // Pseudo-random function
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
      // Create vertical beams
      float beam = 0.0;
      
      for(float i = 0.0; i < 10.0; i++) {
        float speed = 0.1 + random(vec2(i)) * 0.2;
        float pos = random(vec2(i + 0.1)); // Random x position
        float width = 0.005 + random(vec2(i + 0.2)) * 0.01;
        float strength = 0.5 + random(vec2(i + 0.3)) * 0.5;
        
        // Vertical movement
        float yOffset = mod(uTime * speed, 1.0);
        
        // Distance from beam center
        float d = abs(vUv.x - pos);
        
        // Glow falloff
        float glow = width / d;
        
        // Fade out at top and bottom
        float mask = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.0, vUv.y);
        
        // Add time-based pulsing
        float pulse = sin(uTime * 2.0 + i) * 0.5 + 0.5;
        
        beam += glow * strength * mask * pulse * 0.1; // Reduce intensity
      }

      vec3 color = uColor * beam;
      // Add a subtle purple gradient background
      color += vec3(0.05, 0.0, 0.1) * (1.0 - vUv.y); 

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[20, 10]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function BeamsScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-[#030014]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Beams />
      </Canvas>
    </div>
  );
}
