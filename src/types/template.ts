export interface PreconfiguredLocation {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  planetType: 'earth' | 'mars' | 'moon' | 'venus' | 'custom';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export type TemplateMode = 'google-maps' | 'presets';
