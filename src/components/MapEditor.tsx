import { MapPreview3D } from './MapPreview3D';
import { NodeEditor } from './NodeEditor';
import { VariablesPanel } from './VariablesPanel';

export function MapEditor() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* 3D Map Preview */}
      <div className="h-[256px] w-full">
        <MapPreview3D />
      </div>

      {/* Node Editor and Variables Panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <NodeEditor />
        <VariablesPanel />
      </div>
    </div>
  );
}