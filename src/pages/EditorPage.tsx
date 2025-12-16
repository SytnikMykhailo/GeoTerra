import { MapEditor } from '../components/MapEditor';
import { MapSettings } from '../types';

interface EditorPageProps {
  mapSettings: MapSettings;
  setMapSettings: (settings: MapSettings) => void;
  onExport: () => void;
}

export const EditorPage = ({ mapSettings, setMapSettings, onExport }: EditorPageProps) => {
  return (
    <MapEditor 
      settings={mapSettings}
      onSettingsChange={setMapSettings}
      onExport={onExport}
    />
  );
};