export interface PlanetSettings {
  radius: number; // in km
  mass: number; // in Earth masses
  
  erosion: number; // 0-100 erosion level
  temperature: number; // in Celsius
  hasAtmosphere: boolean;
  atmosphereDensity: number; // 0-100
  
  tectonicPlates: boolean;
  plateCount: number;
  volcanicActivity: number; // 0-100
  
  surfaceWater: number; // 0-100 percentage
  iceCapSize: number; // 0-100 percentage
  vegetation: number; // 0-100 coverage
  
  rotationPeriod: number; // in hours
  axialTilt: number; // in degrees
  gravity: number; // in m/s²
}
