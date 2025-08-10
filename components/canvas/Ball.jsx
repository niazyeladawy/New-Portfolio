'use client'
import { Decal , Float, OrbitControls, Preload, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

import CanvasLoader from '../Loader'


const Ball = ({ icon}) => {

  const [decal] = useTexture([icon.src])
  return (
   <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, .05]} />
      <mesh receiveShadow castShadow  scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>

     </Float>
  )
}

const BallCanvas = ({icon}) => {
const isMobile = /Mobi|Android/i.test(navigator.userAgent);


  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '200px', height: '200px' }}
          pixelRatio={isMobile ? 1 : window.devicePixelRatio}

      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas