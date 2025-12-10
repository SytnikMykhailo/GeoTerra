export interface ExportSettings {
  format: 'obj' | 'fbx' | 'gltf' | 'stl';
  scale: number;
  includeTextures: boolean;
  includeNormals: boolean;
  includeUVs: boolean;
  optimizeMesh: boolean;
  exportResolution: number;
  compressionLevel: number;
}
