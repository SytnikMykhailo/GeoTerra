import { MapPreview3D } from './MapPreview3D';
import { NodeEditor } from './NodeEditor';
import { VariablesPanel } from './VariablesPanel';
import { MapSettings } from '../types';

interface MapEditorProps {
  settings: MapSettings;
  onSettingsChange: (settings: MapSettings) => void;
  onExport?: () => void;
}

export function MapEditor({ settings, onSettingsChange, onExport }: MapEditorProps) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* 3D Map Preview */}
      <div className="h-[256px] w-full">
        <MapPreview3D settings={settings} />
      </div>

      {/* Node Editor and Variables Panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <NodeEditor />
        <VariablesPanel 
          settings={settings} 
          onChange={onSettingsChange}
          onExport={onExport}
        />
      </div>
    </div>
  );
}