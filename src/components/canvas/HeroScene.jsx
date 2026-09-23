import { Component, Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, MeshDistortMaterial, Sphere, Sparkles } from "@react-three/drei";

class CanvasBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function CoreBlob({ small }) {
  const mesh = useRef(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.06;
    mesh.current.rotation.y += delta * 0.1;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={mesh} args={[small ? 0.95 : 1.6, 128, 128]} position={small ? [0, 0.6, 0] : [1.6, 0.2, 0]}>
        <MeshDistortMaterial
          color="#2a2a30"
          attach="material"
          distort={0.42}
          speed={1.6}
          roughness={0.22}
          metalness={0.75}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing({ small }) {
  const ref = useRef(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.12;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.6, 0.2, 0]} position={small ? [0, 0.6, 0] : [1.6, 0.2, 0]}>
      <torusGeometry args={[small ? 1.6 : 2.6, 0.006, 16, 240]} />
      <meshBasicMaterial color="#c9f158" transparent opacity={0.55} />
    </mesh>
  );
}

const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

export default function HeroScene({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <CanvasBoundary>
        <Canvas
          dpr={[1, isSmallScreen ? 1 : 1.5]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[4, 5, 3]} intensity={2.2} color="#ffffff" />
            <pointLight position={[-4, -2, 2]} intensity={25} color="#c9f158" />
            <pointLight position={[4, -3, -2]} intensity={15} color="#6fb8ff" />
            {/* Local light panels give the chrome blob something to reflect without loading an HDR file. */}
            <Environment resolution={256}>
              <Lightformer form="rect" intensity={3} color="#ffffff" position={[0, 5, -6]} scale={[10, 3, 1]} />
              <Lightformer form="rect" intensity={4} color="#c9f158" position={[-6, 0, 2]} rotation-y={Math.PI / 2} scale={[4, 8, 1]} />
              <Lightformer form="rect" intensity={2.5} color="#6fb8ff" position={[6, -1, 1]} rotation-y={-Math.PI / 2} scale={[4, 6, 1]} />
              <Lightformer form="ring" intensity={2} color="#ffffff" position={[2, 2, 6]} scale={2} />
            </Environment>
            <CoreBlob small={isSmallScreen} />
            <OrbitRing small={isSmallScreen} />
            <Sparkles
              count={isSmallScreen ? 20 : 50}
              scale={[10, 6, 4]}
              size={2}
              speed={0.25}
              color="#ecebe6"
              opacity={0.5}
            />
            <Rig />
          </Suspense>
        </Canvas>
      </CanvasBoundary>
    </div>
  );
}
