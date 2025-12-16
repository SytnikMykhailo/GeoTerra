import { MapPreview3D } from '../components/MapPreview3D';
import { NodeEditor } from '../components/NodeEditor';
import { VariablesPanel } from '../components/VariablesPanel';
import { MapSettings } from '../types';

interface EditorPageProps {
  mapSettings: MapSettings;
  setMapSettings: (settings: MapSettings) => void;
  onExport: () => void;
}

export const EditorPage = ({ mapSettings, setMapSettings, onExport }: EditorPageProps) => {
  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">
      {/* Left Panel - 3D Preview */}
      <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-full border-b md:border-r md:border-b-0 border-purple-700/50">
        <MapPreview3D settings={mapSettings} />
      </div>

      {/* Right Panel - Split between Node Editor and Variables */}
      <div className="w-full md:w-1/2 h-full flex flex-col">
        {/* Top - Node Editor */}
        <div className="h-1/2 md:h-3/5 border-b border-purple-700/50 overflow-hidden">
          <NodeEditor />
        </div>

        {/* Bottom - Variables Panel */}
        <div className="h-1/2 md:h-2/5 overflow-hidden">
          <VariablesPanel 
            settings={mapSettings} 
            onChange={setMapSettings}
            onExport={onExport}
          />
        </div>
      </div>
    </div>
  );
};