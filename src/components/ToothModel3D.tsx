
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';
import { Mesh } from 'three';

export default function ToothModel3D() {
  const toothRef = useRef<Mesh>(null);
  
  // Simple animation
  useFrame((state) => {
    if (toothRef.current) {
      toothRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float rotationIntensity={0.2} floatIntensity={1.5} speed={1.5}>
        <mesh ref={toothRef} castShadow receiveShadow scale={1.2}>
          <torusGeometry args={[1, 0.4, 16, 32]} />
          <meshPhysicalMaterial 
            color={"#ffffff"}
            metalness={0.2}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive={"#004d40"}
            emissiveIntensity={0.1}
            envMapIntensity={0.5}
          />
        </mesh>
      </Float>
    </PresentationControls>
  );
}
