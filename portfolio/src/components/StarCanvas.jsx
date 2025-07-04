import { Points, PointMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { inSphere } from 'maath/random';
import { useState, useRef, Suspense } from 'react';

function StarBackground(props) {
  const ref = useRef(null);
  const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} positions={sphere} frustumCulled {...props}>
        <PointMaterial transparent color='#fff' size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

function StarsCanvas() {
  return (
    <div className='fixed inset-0 w-screen h-screen -z-10 pointer-events-none'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default StarsCanvas;
