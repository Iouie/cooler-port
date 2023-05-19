import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Doge = () => {
  const doge = useGLTF("./planet/scene.gltf");

  return <primitive object={doge.scene} scale={2} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 75, near: 0.1, far: 200, position: [5, 10, 20] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Doge />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
