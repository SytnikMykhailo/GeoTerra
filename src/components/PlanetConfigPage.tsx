import { useState, useCallback } from 'react';
import { PlanetPreview3D } from './PlanetPreview3D';
import { PlanetSettings } from '../types/planet';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface PlanetConfigPageProps {
  onContinue: (settings: PlanetSettings) => void;
}

export function PlanetConfigPage({ onContinue }: PlanetConfigPageProps) {
  const [planetSettings, setPlanetSettings] = useState<PlanetSettings>({
    radius: 6371, // Earth radius
    mass: 1, // Earth mass
    erosion: 50,
    temperature: 15,
    hasAtmosphere: true,
    atmosphereDensity: 70,
    tectonicPlates: true,
    plateCount: 7,
    volcanicActivity: 30,
    surfaceWater: 70,
    iceCapSize: 10,
    vegetation: 40,
    rotationPeriod: 24,
    axialTilt: 23.5,
    gravity: 9.81,
  });

  const updateSetting = useCallback(<K extends keyof PlanetSettings>(key: K, value: PlanetSettings[K]) => {
    setPlanetSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  return (
    <div className="w-screen h-full flex flex-col md:flex-row bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Left Panel - 3D Planet Preview */}
      <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-full bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm md:border-r border-purple-700/50 flex items-center justify-center p-3 sm:p-4 md:p-8">
        <div className="w-full max-w-2xl h-full flex items-center justify-center">
          <PlanetPreview3D settings={planetSettings} />
        </div>
      </div>

      {/* Right Panel - Parameters */}
      <div className="w-full md:w-1/2 h-full bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-purple-100 text-xl sm:text-2xl md:text-4xl mb-4 sm:mb-6 md:mb-8 italic">Planet Parameters</h2>

          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="flex w-full bg-gray-800/50 border border-purple-700/50 mb-4 sm:mb-5 md:mb-6 overflow-x-auto min-h-[40px] sm:min-h-[44px] md:min-h-[48px]">
              <TabsTrigger value="physical" className="flex-1 text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap px-1.5 xs:px-2 sm:px-3 md:px-4 transition-all">
                Physical
              </TabsTrigger>
              <TabsTrigger value="surface" className="flex-1 text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap px-1.5 xs:px-2 sm:px-3 md:px-4 transition-all">
                Surface
              </TabsTrigger>
              <TabsTrigger value="tectonic" className="flex-1 text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap px-1.5 xs:px-2 sm:px-3 md:px-4 transition-all">
                Tectonic
              </TabsTrigger>
              <TabsTrigger value="atmosphere" className="flex-1 text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap px-1.5 xs:px-2 sm:px-3 md:px-4 transition-all">
                Atmosphere
              </TabsTrigger>
            </TabsList>

            {/* Physical Properties */}
            <TabsContent value="physical" className="mt-0">
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Radius: {planetSettings.radius.toFixed(0)} km
                    </Label>
                    <Slider
                      min={1000}
                      max={100000}
                      step={100}
                      value={[planetSettings.radius]}
                      onValueChange={([value]) => updateSetting('radius', value)}
                      className="w-full"
                    />
                    <p className="text-xs sm:text-sm text-purple-300">
                      Earth radius: 6,371 km
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Mass: {planetSettings.mass.toFixed(2)} Earth masses
                    </Label>
                    <Slider
                      min={0.01}
                      max={10}
                      step={0.01}
                      value={[planetSettings.mass]}
                      onValueChange={([value]) => updateSetting('mass', value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Gravity: {planetSettings.gravity.toFixed(2)} m/s²
                    </Label>
                    <Slider
                      min={0.1}
                      max={50}
                      step={0.1}
                      value={[planetSettings.gravity]}
                      onValueChange={([value]) => updateSetting('gravity', value)}
                      className="w-full"
                    />
                    <p className="text-xs sm:text-sm text-purple-300">
                      Earth gravity: 9.81 m/s²
                    </p>
                  </div>

                  <Separator className="bg-purple-700/50" />

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Rotation Period: {planetSettings.rotationPeriod.toFixed(1)} hours
                    </Label>
                    <Slider
                      min={1}
                      max={1000}
                      step={0.5}
                      value={[planetSettings.rotationPeriod]}
                      onValueChange={([value]) => updateSetting('rotationPeriod', value)}
                      className="w-full"
                    />
                    <p className="text-xs sm:text-sm text-purple-300">
                      Earth day: 24 hours
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Axial Tilt: {planetSettings.axialTilt.toFixed(1)}°
                    </Label>
                    <Slider
                      min={0}
                      max={90}
                      step={0.5}
                      value={[planetSettings.axialTilt]}
                      onValueChange={([value]) => updateSetting('axialTilt', value)}
                      className="w-full"
                    />
                    <p className="text-xs sm:text-sm text-purple-300">
                      Affects seasonal variations
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Surface Properties */}
            <TabsContent value="surface" className="mt-0">
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Temperature: {planetSettings.temperature.toFixed(0)}°C
                    </Label>
                    <Slider
                      min={-200}
                      max={500}
                      step={5}
                      value={[planetSettings.temperature]}
                      onValueChange={([value]) => updateSetting('temperature', value)}
                      className="w-full"
                    />
                    <p className="text-xs sm:text-sm text-purple-300">
                      Average surface temperature
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Erosion Level: {planetSettings.erosion}%
                    </Label>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={[planetSettings.erosion]}
                      onValueChange={([value]) => updateSetting('erosion', value)}
                      className="w-full"
                    />
                    <p className="text-xs sm:text-sm text-purple-300">
                      Higher values = more weathered terrain
                    </p>
                  </div>

                  <Separator className="bg-purple-700/50" />

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Surface Water Coverage: {planetSettings.surfaceWater}%
                    </Label>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={[planetSettings.surfaceWater]}
                      onValueChange={([value]) => updateSetting('surfaceWater', value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Ice Cap Size: {planetSettings.iceCapSize}%
                    </Label>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={[planetSettings.iceCapSize]}
                      onValueChange={([value]) => updateSetting('iceCapSize', value)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Vegetation Coverage: {planetSettings.vegetation}%
                    </Label>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={[planetSettings.vegetation]}
                      onValueChange={([value]) => updateSetting('vegetation', value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Tectonic Properties */}
            <TabsContent value="tectonic" className="mt-0">
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Tectonic Plates
                    </Label>
                    <Switch
                      checked={planetSettings.tectonicPlates}
                      onCheckedChange={(checked) => updateSetting('tectonicPlates', checked)}
                      className="flex-shrink-0"
                    />
                  </div>

                  {planetSettings.tectonicPlates && (
                    <>
                      <div className="space-y-2">
                        <Label className="text-purple-200 text-sm sm:text-base">
                          Number of Plates: {planetSettings.plateCount}
                        </Label>
                        <Slider
                          min={2}
                          max={20}
                          step={1}
                          value={[planetSettings.plateCount]}
                          onValueChange={([value]) => updateSetting('plateCount', value)}
                          className="w-full"
                        />
                        <p className="text-xs sm:text-sm text-purple-300">
                          Earth has approximately 7 major plates
                        </p>
                      </div>

                      <Separator className="bg-purple-700/50" />
                    </>
                  )}

                  <div className="space-y-2">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Volcanic Activity: {planetSettings.volcanicActivity}%
                    </Label>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={[planetSettings.volcanicActivity]}
                      onValueChange={([value]) => updateSetting('volcanicActivity', value)}
                      className="w-full"
                    />
                    <p className="text-xs sm:text-sm text-purple-300">
                      Affects terrain formation and heat distribution
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Atmosphere Properties */}
            <TabsContent value="atmosphere" className="mt-0">
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <Label className="text-purple-200 text-sm sm:text-base">
                      Has Atmosphere
                    </Label>
                    <Switch
                      checked={planetSettings.hasAtmosphere}
                      onCheckedChange={(checked) => updateSetting('hasAtmosphere', checked)}
                      className="flex-shrink-0"
                    />
                  </div>

                  {planetSettings.hasAtmosphere && (
                    <>
                      <div className="space-y-2">
                        <Label className="text-purple-200 text-sm sm:text-base">
                          Atmosphere Density: {planetSettings.atmosphereDensity}%
                        </Label>
                        <Slider
                          min={0}
                          max={100}
                          step={1}
                          value={[planetSettings.atmosphereDensity]}
                          onValueChange={([value]) => updateSetting('atmosphereDensity', value)}
                          className="w-full"
                        />
                        <p className="text-xs sm:text-sm text-purple-300">
                          Affects weather patterns and erosion
                        </p>
                      </div>
                    </>
                  )}

                  <Separator className="bg-purple-700/50" />

                  <div className="bg-purple-900/40 p-3 sm:p-4 rounded-lg">
                    <h4 className="text-purple-200 mb-2 sm:mb-3 text-sm sm:text-base">Current Configuration</h4>
                    <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-purple-300">
                      <div className="flex justify-between gap-2">
                        <span>Planet Type:</span>
                        <span className="text-purple-100 text-right">
                          {planetSettings.temperature < -50 ? 'Ice World' :
                           planetSettings.temperature > 100 ? 'Hot/Volcanic' :
                           planetSettings.surfaceWater > 50 ? 'Ocean World' :
                           planetSettings.hasAtmosphere ? 'Terrestrial' : 'Barren'}
                        </span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span>Habitability:</span>
                        <span className="text-purple-100 text-right">
                          {planetSettings.hasAtmosphere && 
                           planetSettings.temperature > -20 && 
                           planetSettings.temperature < 50 && 
                           planetSettings.surfaceWater > 10 ? 'Potentially Habitable' : 'Hostile'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Continue Button */}
          <Button
            onClick={() => onContinue(planetSettings)}
            className="w-full mt-4 sm:mt-6 md:mt-8 bg-purple-600 hover:bg-purple-700 text-white h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl transition-all"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}