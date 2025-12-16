import { useState, useCallback } from 'react';
import { PlanetPreview3D } from './PlanetPreview3D';
import { PlanetSettings } from '../types/planet';
import { StyledCard, SliderControl, SwitchControl } from './common/FormControls';
import { Label } from './ui/label';
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
              <StyledCard>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <SliderControl
                    label="Radius"
                    value={planetSettings.radius}
                    min={1000}
                    max={100000}
                    step={100}
                    onChange={(value) => updateSetting('radius', value)}
                    formatValue={(val) => `${val.toFixed(0)} km`}
                    description="Earth radius: 6,371 km"
                  />

                  <SliderControl
                    label="Mass"
                    value={planetSettings.mass}
                    min={0.01}
                    max={10}
                    step={0.01}
                    onChange={(value) => updateSetting('mass', value)}
                    formatValue={(val) => `${val.toFixed(2)} Earth masses`}
                  />

                  <SliderControl
                    label="Gravity"
                    value={planetSettings.gravity}
                    min={0.1}
                    max={50}
                    step={0.1}
                    onChange={(value) => updateSetting('gravity', value)}
                    formatValue={(val) => `${val.toFixed(2)} m/s²`}
                    description="Earth gravity: 9.81 m/s²"
                  />

                  <Separator className="bg-purple-700/50" />

                  <SliderControl
                    label="Rotation Period"
                    value={planetSettings.rotationPeriod}
                    min={1}
                    max={1000}
                    step={0.5}
                    onChange={(value) => updateSetting('rotationPeriod', value)}
                    formatValue={(val) => `${val.toFixed(1)} hours`}
                    description="Earth day: 24 hours"
                  />

                  <SliderControl
                    label="Axial Tilt"
                    value={planetSettings.axialTilt}
                    min={0}
                    max={90}
                    step={0.5}
                    onChange={(value) => updateSetting('axialTilt', value)}
                    formatValue={(val) => `${val.toFixed(1)}°`}
                    description="Affects seasonal variations"
                  />
                </div>
              </StyledCard>
            </TabsContent>

            {/* Surface Properties */}
            <TabsContent value="surface" className="mt-0">
              <StyledCard>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <SliderControl
                    label="Temperature"
                    value={planetSettings.temperature}
                    min={-200}
                    max={500}
                    step={5}
                    onChange={(value) => updateSetting('temperature', value)}
                    formatValue={(val) => `${val.toFixed(0)}°C`}
                    description="Average surface temperature"
                  />

                  <SliderControl
                    label="Erosion Level"
                    value={planetSettings.erosion}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value) => updateSetting('erosion', value)}
                    formatValue={(val) => `${val}%`}
                    description="Higher values = more weathered terrain"
                  />

                  <Separator className="bg-purple-700/50" />

                  <SliderControl
                    label="Surface Water Coverage"
                    value={planetSettings.surfaceWater}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value) => updateSetting('surfaceWater', value)}
                    formatValue={(val) => `${val}%`}
                  />

                  <SliderControl
                    label="Ice Cap Size"
                    value={planetSettings.iceCapSize}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value) => updateSetting('iceCapSize', value)}
                    formatValue={(val) => `${val}%`}
                  />

                  <SliderControl
                    label="Vegetation Coverage"
                    value={planetSettings.vegetation}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value) => updateSetting('vegetation', value)}
                    formatValue={(val) => `${val}%`}
                  />
                </div>
              </StyledCard>
            </TabsContent>

            {/* Tectonic Properties */}
            <TabsContent value="tectonic" className="mt-0">
              <StyledCard>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <SwitchControl
                    label="Tectonic Plates"
                    checked={planetSettings.tectonicPlates}
                    onChange={(checked) => updateSetting('tectonicPlates', checked)}
                  />

                  {planetSettings.tectonicPlates && (
                    <>
                      <SliderControl
                        label="Number of Plates"
                        value={planetSettings.plateCount}
                        min={2}
                        max={20}
                        step={1}
                        onChange={(value) => updateSetting('plateCount', value)}
                        description="Earth has approximately 7 major plates"
                      />

                      <Separator className="bg-purple-700/50" />
                    </>
                  )}

                  <SliderControl
                    label="Volcanic Activity"
                    value={planetSettings.volcanicActivity}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value) => updateSetting('volcanicActivity', value)}
                    formatValue={(val) => `${val}%`}
                    description="Affects terrain formation and heat distribution"
                  />
                </div>
              </StyledCard>
            </TabsContent>

            {/* Atmosphere Properties */}
            <TabsContent value="atmosphere" className="mt-0">
              <StyledCard>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <SwitchControl
                    label="Has Atmosphere"
                    checked={planetSettings.hasAtmosphere}
                    onChange={(checked) => updateSetting('hasAtmosphere', checked)}
                  />

                  {planetSettings.hasAtmosphere && (
                    <SliderControl
                      label="Atmosphere Density"
                      value={planetSettings.atmosphereDensity}
                      min={0}
                      max={100}
                      step={1}
                      onChange={(value) => updateSetting('atmosphereDensity', value)}
                      formatValue={(val) => `${val}%`}
                      description="Affects weather patterns and erosion"
                    />
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
              </StyledCard>
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