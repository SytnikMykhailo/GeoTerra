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
    <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
      {/* 3D Map Preview - на широких екранах зліва, на вузьких зверху */}
      <div className="h-48 sm:h-64 md:h-full w-full md:w-1/2 md:border-r border-purple-700/50">
        <MapPreview3D settings={settings} />
      </div>

      {/* Node Editor and Variables Panel - на широких екранах справа */}
      <div className="flex-1 md:w-1/2 flex flex-col overflow-hidden">
        {/* Node Editor */}
        <div className="flex-1 md:h-3/5 border-b border-purple-700/50 overflow-hidden">
          <NodeEditor />
        </div>
        
        {/* Variables Panel */}
        <div className="h-auto md:h-2/5 overflow-hidden">
          <VariablesPanel 
            settings={settings} 
            onChange={onSettingsChange}
            onExport={onExport}
          />
        </div>
      </div>
    </div>
  );
}