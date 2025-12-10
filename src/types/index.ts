export interface MapSettings {
  width: number;
  depth: number;
  heightScale: number;
  octaves: number;
  persistence: number;
  lacunarity: number;
  seed: number;
  wireframe: boolean;
}

export interface NodeType {
  id: string;
  type: 'noise' | 'multiply' | 'add' | 'clamp' | 'output';
  position: { x: number; y: number };
  inputs: string[];
  outputs: string[];
  params?: Record<string, any>;
}

export interface Connection {
  id: string;
  from: string;
  to: string;
  fromOutput: number;
  toInput: number;
}

export interface NodeDefinition {
  type: string;
  label: string;
  color: string;
  inputs: number;
  outputs: number;
  defaultParams?: Record<string, any>;
}
