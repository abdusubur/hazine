"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import WaveMesh from "./WaveMesh";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Handle high-DPI screens
      >
        <Suspense fallback={null}>
            <color attach="background" args={['#111827']} />
            <fog attach="fog" args={['#111827', 5, 15]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <WaveMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
