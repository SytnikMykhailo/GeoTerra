export interface PlanetSettings {
  // Planet dimensions
  radius: number; // in km
  mass: number; // in Earth masses
  
  // Surface properties
  erosion: number; // 0-100 erosion level
  temperature: number; // in Celsius
  hasAtmosphere: boolean;
  atmosphereDensity: number; // 0-100
  
  // Tectonic activity
  tectonicPlates: boolean;
  plateCount: number;
  volcanicActivity: number; // 0-100
  
  // Composition
  surfaceWater: number; // 0-100 percentage
  iceCapSize: number; // 0-100 percentage
  vegetation: number; // 0-100 coverage
  
  // Astronomical properties
  rotationPeriod: number; // in hours
  axialTilt: number; // in degrees
  gravity: number; // in m/s²
}
