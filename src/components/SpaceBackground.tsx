import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const createStarTexture = (): THREE.CanvasTexture => {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.CanvasTexture(canvas);

  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.05, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  return texture;
};

interface CustomStarFieldProps {
  speed: number;
}

const CustomStarField: React.FC<CustomStarFieldProps> = ({ speed }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 8000;

  const starTexture = useMemo(() => createStarTexture(), []);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const s = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;

      s[i] = Math.pow(Math.random(), 20) * 0.004 + 0.001;
    }
    return [pos, s];
  }, [count]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z += delta * 0.03 * speed;
      pointsRef.current.rotation.y += delta * 0.008 * speed;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        map={starTexture}
        size={1}
        sizeAttenuation={true}
        transparent={true}
        alphaTest={0.1}
        color="#ffffff"
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

interface SpaceBackgroundProps {
  speed?: number;
}

export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  speed = 1,
}) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 20], fov: 60, near: 0.1, far: 200 }}
      >
        <CustomStarField speed={speed} />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
