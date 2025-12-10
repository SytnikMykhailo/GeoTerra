import { MapSettings } from '../types';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

interface VariablesPanelProps {
  settings: MapSettings;
  onChange: (settings: MapSettings) => void;
  onExport?: () => void;
}

export function VariablesPanel({ settings, onChange, onExport }: VariablesPanelProps) {
  const updateSetting = <K extends keyof MapSettings>(key: K, value: MapSettings[K]) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
      <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-3 sm:p-4">
        <h3 className="text-purple-200 mb-3 sm:mb-4 text-sm sm:text-base">Map Parameters</h3>
        
        {/* Dimensions */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="width" className="text-purple-200 text-xs sm:text-sm">
              Width: {settings.width}
            </Label>
            <Slider
              id="width"
              min={10}
              max={100}
              step={1}
              value={[settings.width]}
              onValueChange={([value]) => updateSetting('width', value)}
              className="w-full"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="depth" className="text-purple-200 text-xs sm:text-sm">
              Depth: {settings.depth}
            </Label>
            <Slider
              id="depth"
              min={10}
              max={100}
              step={1}
              value={[settings.depth]}
              onValueChange={([value]) => updateSetting('depth', value)}
              className="w-full"
            />
          </div>
        </div>

        <Separator className="bg-purple-700/50 my-3 sm:my-4" />

        {/* Terrain Generation */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <h4 className="text-purple-200 text-sm sm:text-base">Terrain Generation</h4>
          
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="heightScale" className="text-purple-200 text-xs sm:text-sm">
              Height Scale: {settings.heightScale.toFixed(1)}
            </Label>
            <Slider
              id="heightScale"
              min={0}
              max={20}
              step={0.5}
              value={[settings.heightScale]}
              onValueChange={([value]) => updateSetting('heightScale', value)}
              className="w-full"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="octaves" className="text-purple-200 text-xs sm:text-sm">
              Octaves: {settings.octaves}
            </Label>
            <Slider
              id="octaves"
              min={1}
              max={8}
              step={1}
              value={[settings.octaves]}
              onValueChange={([value]) => updateSetting('octaves', value)}
              className="w-full"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="persistence" className="text-purple-200 text-xs sm:text-sm">
              Persistence: {settings.persistence.toFixed(2)}
            </Label>
            <Slider
              id="persistence"
              min={0}
              max={1}
              step={0.01}
              value={[settings.persistence]}
              onValueChange={([value]) => updateSetting('persistence', value)}
              className="w-full"
            />
          </div>

          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="lacunarity" className="text-purple-200 text-xs sm:text-sm">
              Lacunarity: {settings.lacunarity.toFixed(2)}
            </Label>
            <Slider
              id="lacunarity"
              min={1}
              max={4}
              step={0.1}
              value={[settings.lacunarity]}
              onValueChange={([value]) => updateSetting('lacunarity', value)}
              className="w-full"
            />
          </div>
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

          <div className="flex items-center justify-between">
            <Label htmlFor="wireframe" className="text-purple-200 text-xs sm:text-sm">
              Wireframe Mode
            </Label>
            <Switch
              id="wireframe"
              checked={settings.wireframe}
              onCheckedChange={(checked) => updateSetting('wireframe', checked)}
            />
          </div>
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
      </Card>
    </div>
  );
}