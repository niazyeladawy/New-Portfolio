'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { OrbitControls, Preload, ambientLight, directionalLight } from '@react-three/drei';
import CanvasLoader from './Loader';
import { technologies } from '@/constants'; // your tech list
import Ball from './canvas/Ball';

const TechCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    setPixelRatio(window.devicePixelRatio || 1);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '400px' }} // adjust height as needed
      dpr={isMobile ? 1 : pixelRatio}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {technologies.map((tech, index) => {
          // Arrange balls in a grid, adjust spacing as needed
          const x = (index % 5) * 4 - 8;
          const y = -Math.floor(index / 5) * 4 + 4;
          return <Ball key={tech.name} icon={tech.icon} position={[x, y, 0]} />;
        })}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechCanvas;
