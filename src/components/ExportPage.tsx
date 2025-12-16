import { useState, useCallback } from 'react';
import { ExportSettings } from '../types/export';
import { StyledCard, SliderControl, SwitchControl } from './common/FormControls';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Download, FolderOpen, ArrowLeft } from 'lucide-react';

interface ExportPageProps {
  onBack: () => void;
}

export function ExportPage({ onBack }: ExportPageProps) {
  const [exportSettings, setExportSettings] = useState<ExportSettings>({
    format: 'obj',
    scale: 1,
    includeTextures: true,
    includeNormals: true,
    includeUVs: true,
    optimizeMesh: false,
    exportResolution: 1024,
    compressionLevel: 5,
  });

  const updateSetting = useCallback(<K extends keyof ExportSettings>(key: K, value: ExportSettings[K]) => {
    setExportSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleExport = useCallback(() => {
    console.log('Exporting with settings:', exportSettings);
    // Тут буде логіка експорту
  }, [exportSettings]);

  const handleExportTo = useCallback(() => {
    console.log('Export to custom location:', exportSettings);
    // Тут буде логіка вибору місця експорту
  }, [exportSettings]);

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Ліва частина - Кнопки експорту */}
      <div className="w-full md:w-1/3 lg:w-1/4 h-auto md:h-full bg-purple-900/30 backdrop-blur-sm md:border-r border-purple-700/50 p-3 sm:p-4 md:p-6 flex flex-col">
        <div className="flex-1 flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6">
          <StyledCard className="p-3 sm:p-4 md:p-6">
            <h2 className="text-purple-200 mb-3 sm:mb-4 md:mb-6 text-base sm:text-lg md:text-xl">Export Options</h2>
            
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <Button
                onClick={handleExport}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg h-10 sm:h-12 md:h-auto"
                size="lg"
              >
                <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Export
              </Button>

              <Button
                onClick={handleExportTo}
                variant="outline"
                className="w-full border-purple-600 text-purple-200 hover:bg-purple-700/50 hover:text-white py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg h-10 sm:h-12 md:h-auto"
                size="lg"
              >
                <FolderOpen className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Export to...
              </Button>
            </div>

            <Separator className="bg-purple-700/50 my-3 sm:my-4 md:my-6" />

            <div className="space-y-1.5 sm:space-y-2 md:space-y-3 text-xs sm:text-sm text-purple-300">
              <div className="flex justify-between">
                <span>Format:</span>
                <span className="text-purple-100 uppercase">{exportSettings.format}</span>
              </div>
              <div className="flex justify-between">
                <span>Resolution:</span>
                <span className="text-purple-100">{exportSettings.exportResolution}px</span>
              </div>
              <div className="flex justify-between">
                <span>Scale:</span>
                <span className="text-purple-100">{exportSettings.scale}x</span>
              </div>
            </div>
          </StyledCard>

          <StyledCard className="bg-gray-800/60 p-3 md:p-4 hidden md:block">
            <p className="text-purple-200 text-xs md:text-sm">
              Your procedurally generated map will be exported with the current settings. 
              Make sure all parameters are configured correctly before exporting.
            </p>
          </StyledCard>
        </div>
      </div>

      {/* Права частина - Параметри експорту */}
      <div className="w-full md:w-2/3 lg:w-3/4 h-full bg-purple-900/20 backdrop-blur-sm p-3 sm:p-4 md:p-6 overflow-y-auto">
        <StyledCard className="p-3 sm:p-4 md:p-6 max-w-3xl mx-auto">
          <h2 className="text-purple-200 mb-3 sm:mb-4 md:mb-6 text-base sm:text-lg md:text-xl">Export Parameters</h2>

          {/* Формат файлу */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="format" className="text-purple-200 text-sm sm:text-base">
                File Format
              </Label>
              <Select
                value={exportSettings.format}
                onValueChange={(value) => updateSetting('format', value as ExportSettings['format'])}
              >
                <SelectTrigger className="bg-gray-700/50 border-purple-600 text-white h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-purple-600">
                  <SelectItem value="obj" className="text-white text-sm sm:text-base">OBJ (.obj)</SelectItem>
                  <SelectItem value="fbx" className="text-white text-sm sm:text-base">FBX (.fbx)</SelectItem>
                  <SelectItem value="gltf" className="text-white text-sm sm:text-base">glTF (.gltf)</SelectItem>
                  <SelectItem value="stl" className="text-white text-sm sm:text-base">STL (.stl)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator className="bg-purple-700/50" />

            <SliderControl
              label="Scale"
              value={exportSettings.scale}
              min={0.1}
              max={10}
              step={0.1}
              onChange={(value) => updateSetting('scale', value)}
              formatValue={(val) => `${val.toFixed(2)}x`}
            />

            <SliderControl
              label="Export Resolution"
              value={exportSettings.exportResolution}
              min={256}
              max={4096}
              step={256}
              onChange={(value) => updateSetting('exportResolution', value)}
              formatValue={(val) => `${val}px`}
            />

            <SliderControl
              label="Compression Level"
              value={exportSettings.compressionLevel}
              min={0}
              max={10}
              step={1}
              onChange={(value) => updateSetting('compressionLevel', value)}
              description="0 = No compression, 10 = Maximum compression"
            />

            <Separator className="bg-purple-700/50" />

            {/* Опції включення */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-purple-200 text-sm sm:text-base">Include Options</h3>
              
              <SwitchControl
                label="Include Textures"
                checked={exportSettings.includeTextures}
                onChange={(checked) => updateSetting('includeTextures', checked)}
              />

              <SwitchControl
                label="Include Normals"
                checked={exportSettings.includeNormals}
                onChange={(checked) => updateSetting('includeNormals', checked)}
              />

              <SwitchControl
                label="Include UV Coordinates"
                checked={exportSettings.includeUVs}
                onChange={(checked) => updateSetting('includeUVs', checked)}
              />

              <SwitchControl
                label="Optimize Mesh"
                checked={exportSettings.optimizeMesh}
                onChange={(checked) => updateSetting('optimizeMesh', checked)}
              />
            </div>
          </div>
        </StyledCard>
      </div>
    </div>
  );
}