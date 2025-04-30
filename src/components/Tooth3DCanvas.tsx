
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import ToothModel3D from './ToothModel3D';

export default function Tooth3DCanvas() {
  return (
    <div className="absolute right-10 bottom-10 md:right-20 md:bottom-20 w-32 h-32 md:w-48 md:h-48">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#004d40" />
        <Sparkles count={50} scale={6} size={1} speed={0.3} color="#00e5ff" />
        <ToothModel3D />
      </Canvas>
    </div>
  );
}
