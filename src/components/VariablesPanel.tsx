import { useCallback } from 'react';
import { MapSettings } from '../types';
import { StyledCard, SliderControl, SwitchControl } from './common/FormControls';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

interface VariablesPanelProps {
  settings: MapSettings;
  onChange: (settings: MapSettings) => void;
  onExport?: () => void;
}

export function VariablesPanel({ settings, onChange, onExport }: VariablesPanelProps) {
  const updateSetting = useCallback(<K extends keyof MapSettings>(key: K, value: MapSettings[K]) => {
    onChange({ ...settings, [key]: value });
  }, [settings, onChange]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
      <StyledCard className="p-3 sm:p-4">
        <h3 className="text-purple-200 mb-3 sm:mb-4 text-sm sm:text-base">Map Parameters</h3>
        
        {/* Dimensions */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <SliderControl
            label="Width"
            value={settings.width}
            min={10}
            max={100}
            step={1}
            onChange={(value) => updateSetting('width', value)}
          />

          <SliderControl
            label="Depth"
            value={settings.depth}
            min={10}
            max={100}
            step={1}
            onChange={(value) => updateSetting('depth', value)}
          />
        </div>

        <Separator className="bg-purple-700/50 my-3 sm:my-4" />

        {/* Terrain Generation */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <h4 className="text-purple-200 text-sm sm:text-base">Terrain Generation</h4>
          
          <SliderControl
            label="Height Scale"
            value={settings.heightScale}
            min={0}
            max={20}
            step={0.5}
            onChange={(value) => updateSetting('heightScale', value)}
            formatValue={(val) => val.toFixed(1)}
          />

          <SliderControl
            label="Octaves"
            value={settings.octaves}
            min={1}
            max={8}
            step={1}
            onChange={(value) => updateSetting('octaves', value)}
          />

          <SliderControl
            label="Persistence"
            value={settings.persistence}
            min={0}
            max={1}
            step={0.01}
            onChange={(value) => updateSetting('persistence', value)}
            formatValue={(val) => val.toFixed(2)}
          />

          <SliderControl
            label="Lacunarity"
            value={settings.lacunarity}
            min={1}
            max={4}
            step={0.1}
            onChange={(value) => updateSetting('lacunarity', value)}
            formatValue={(val) => val.toFixed(2)}
          />
        </div>

        <Separator className="bg-purple-700/50 my-3 sm:my-4" />

        {/* Other Settings */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="seed" className="text-purple-200 text-xs sm:text-sm">
              Seed
            </Label>
            <Input
              id="seed"
              type="number"
              value={settings.seed}
              onChange={(e) => updateSetting('seed', parseInt(e.target.value) || 0)}
              className="bg-gray-700/50 border-purple-600 text-white h-8 sm:h-10 text-xs sm:text-sm"
            />
          </div>

          <SwitchControl
            label="Wireframe Mode"
            checked={settings.wireframe}
            onChange={(checked) => updateSetting('wireframe', checked)}
          />
        </div>

        <Separator className="bg-purple-700/50 my-3 sm:my-4" />

        {/* Export Button */}
        <Button
          onClick={onExport}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white h-9 sm:h-10 text-xs sm:text-sm"
        >
          <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Export
        </Button>
      </StyledCard>
    </div>
  );
}