import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 100, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -13, -1.5] : [0, -15, -1.5]}
        rotation={[0, -0.2, -0.0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // check if device is mobile
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set initial value of isMobile state variable
    setIsMobile(mediaQuery.matches);

    // Define function to handle changes in mediaQuery
    const handleMediaQueryChange = (evt) => {
      setIsMobile(evt.matches);
    };

    // Add callback func as listener for changes to media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove listener when component unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  });
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [75, 50, 50], fov: 21 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader isMobile={isMobile} />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
