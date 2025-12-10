import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { MapSettings } from '../types';

function TerrainMesh({ settings }: { settings: MapSettings }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      settings.width,
      settings.depth,
      settings.width - 1,
      settings.depth - 1
    );
    
    const vertices = geo.attributes.position.array;
    
    // Simple procedural height generation using Perlin-like noise
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 1];
      
      let height = 0;
      let amplitude = 1;
      let frequency = 1;
      
      for (let octave = 0; octave < settings.octaves; octave++) {
        const sampleX = (x / settings.width) * frequency + settings.seed;
        const sampleZ = (z / settings.depth) * frequency + settings.seed;
        
        const noiseValue = Math.sin(sampleX * 5) * Math.cos(sampleZ * 5) + 
                          Math.sin(sampleX * 3 + sampleZ * 3) * 0.5;
        
        height += noiseValue * amplitude;
        
        amplitude *= settings.persistence;
        frequency *= settings.lacunarity;
      }
      
      vertices[i + 2] = height * settings.heightScale;
    }
    
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
    
    return geo;
  }, [settings]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial 
        color="#4a9eff"
        wireframe={settings.wireframe}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function MapPreview3D({ settings }: { settings: MapSettings }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm">
      <Canvas>
        <PerspectiveCamera makeDefault position={[50, 50, 50]} />
        <OrbitControls enableDamping dampingFactor={0.05} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        
        <TerrainMesh settings={settings} />
        
        <gridHelper args={[100, 20, '#8b5cf6', '#6b21a8']} />
      </Canvas>
    </div>
  );
}