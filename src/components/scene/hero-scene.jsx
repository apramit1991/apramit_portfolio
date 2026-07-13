import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// shared, module-level pointer + scroll so the scene reacts to the whole page
const pointer = { x: 0, y: 0 };
let scrollProgress = 0;

function ParticleField() {
  const ref = useRef();
  const positions = useMemo(() => {
    const N = 2600;
    const arr = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 5 + Math.pow(Math.random(), 0.6) * 16;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    const g = ref.current;
    if (!g) return;
    g.rotation.y += delta * 0.018;
    g.rotation.x += delta * 0.006;
    g.rotation.z = pointer.x * 0.12;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7fd8ff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Core({ isMobile }) {
  const group = useRef();
  const baseX = isMobile ? 0 : 1.9;
  const baseScale = isMobile ? 0.72 : 1;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.16;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, pointer.y * 0.35, 0.05);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -pointer.x * 0.22, 0.05);
    // drift back + down as the hero scrolls away
    g.position.x = THREE.MathUtils.lerp(g.position.x, baseX + pointer.x * 0.4, 0.06);
    g.position.y = THREE.MathUtils.lerp(g.position.y, -scrollProgress * 3 - pointer.y * 0.3, 0.06);
    g.position.z = -scrollProgress * 4;
    const pulse = baseScale * (1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.03);
    g.scale.setScalar(pulse);
  });

  return (
    <group ref={group} position={[baseX, 0, 0]}>
      {/* glowing gold core — low metalness + strong emissive so it reads as
          energy, not dull metal (no env map is loaded to reflect) */}
      <Icosahedron args={[1.3, 6]}>
        <MeshDistortMaterial
          color="#f7d29a"
          emissive="#e0902f"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.42}
          distort={0.42}
          speed={1.6}
        />
      </Icosahedron>
      {/* soft additive halo (fakes a bloom glow) */}
      <Icosahedron args={[1.52, 3]}>
        <meshBasicMaterial
          color="#ffca7a"
          transparent
          opacity={0.07}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Icosahedron>
      {/* cyan wireframe cage */}
      <Icosahedron args={[1.78, 1]}>
        <meshBasicMaterial color="#3fe0ff" wireframe transparent opacity={0.3} depthWrite={false} />
      </Icosahedron>
    </group>
  );
}

function Rig({ isMobile, reduced }) {
  const { camera } = useThree();
  useFrame(() => {
    if (reduced) return;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.5, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 4, 5]} intensity={1.4} color="#ffd79a" />
      <pointLight position={[-5, -3, 2]} intensity={1.1} color="#3fe0ff" />
      <pointLight position={[0, 3, -4]} intensity={0.7} color="#8b6cff" />
      <ParticleField />
      <Core isMobile={isMobile} />
    </>
  );
}

export default function HeroScene() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 860;

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onScroll = () => {
      scrollProgress = window.scrollY / (window.innerHeight || 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced]);

  return (
    <div className="scene-layer" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={reduced ? "demand" : "always"}
      >
        <Rig isMobile={isMobile} reduced={reduced} />
      </Canvas>
    </div>
  );
}
