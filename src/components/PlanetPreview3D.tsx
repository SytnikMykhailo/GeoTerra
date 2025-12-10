import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PlanetSettings } from '../types/planet';

interface PlanetPreview3DProps {
  settings: PlanetSettings;
}

export function PlanetPreview3D({ settings }: PlanetPreview3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const planetRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create planet sphere
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    
    // Create planet material
    const material = new THREE.MeshPhongMaterial({
      color: settings.hasAtmosphere ? 0x4a90e2 : 0x8b7355,
      emissive: 0x000000,
      specular: settings.hasAtmosphere ? 0x4444aa : 0x333333,
      shininess: settings.hasAtmosphere ? 30 : 10,
      wireframe: false,
    });

    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);
    planetRef.current = planet;

    // Add atmosphere glow if enabled
    if (settings.hasAtmosphere) {
      const atmosphereGeometry = new THREE.SphereGeometry(1.6, 64, 64);
      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x4a90e2,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphere);
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-5, -3, -5);
    scene.add(pointLight);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (planetRef.current) {
        planetRef.current.rotation.y += 0.002;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Update planet appearance when settings change
  useEffect(() => {
    if (!planetRef.current) return;

    const material = planetRef.current.material as THREE.MeshPhongMaterial;
    
    // Update color based on temperature
    let baseColor = 0x8b7355; // Default brown/rocky
    if (settings.temperature < -50) {
      baseColor = 0xe0e0ff; // Ice planet
    } else if (settings.temperature > 100) {
      baseColor = 0xff6600; // Hot/volcanic planet
    } else if (settings.hasAtmosphere) {
      baseColor = 0x4a90e2; // Earth-like blue
    }
    
    material.color.setHex(baseColor);
    material.specular.setHex(settings.hasAtmosphere ? 0x4444aa : 0x333333);
    material.shininess = settings.hasAtmosphere ? 30 : 10;
  }, [settings]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  );
}
