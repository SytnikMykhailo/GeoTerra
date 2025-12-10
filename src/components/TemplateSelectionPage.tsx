import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Map, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import { PreconfiguredLocation, TemplateMode } from '../types/template';

interface TemplateSelectionPageProps {
  onContinue: (mode: TemplateMode, data: any) => void;
}

// Pre-configured locations data
const PRECONFIGURED_LOCATIONS: PreconfiguredLocation[] = [
  {
    id: 'tatry',
    name: 'Vysoke Tatry Mountains',
    location: 'Slovakia',
    imageUrl: 'https://images.unsplash.com/photo-1551901679-60c9c1ff09c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRlcnJhaW4lMjBzYXRlbGxpdGV8ZW58MXx8fHwxNzYzNTY2MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    planetType: 'earth',
    coordinates: { lat: 49.1791, lng: 20.0750 }
  },
  {
    id: 'sahara',
    name: 'Sahara Desert',
    location: 'Africa',
    imageUrl: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBhZXJpYWx8ZW58MXx8fHwxNzYzNDc1NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    planetType: 'earth',
    coordinates: { lat: 23.4162, lng: 25.6628 }
  },
  {
    id: 'coastline',
    name: 'Ocean Coastline',
    location: 'Pacific Ocean',
    imageUrl: 'https://images.unsplash.com/photo-1722082839766-cb0bf9c8a189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGNvYXN0bGluZSUyMHNhdGVsbGl0ZXxlbnwxfHx8fDE3NjM1NjYyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    planetType: 'earth',
    coordinates: { lat: -17.8216, lng: 168.1166 }
  },
  {
    id: 'forest',
    name: 'Amazon Rainforest',
    location: 'Brazil',
    imageUrl: 'https://images.unsplash.com/photo-1758465828635-cb04ee439095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjYW5vcHklMjBhZXJpYWx8ZW58MXx8fHwxNzYzNTA2OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    planetType: 'earth',
    coordinates: { lat: -3.4653, lng: -62.2159 }
  },
  {
    id: 'iceland',
    name: 'Iceland Volcanic Terrain',
    location: 'Iceland',
    imageUrl: 'https://images.unsplash.com/photo-1705956659437-0edac9d4d8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbGFuZHNjYXBlJTIwdm9sY2FuaWN8ZW58MXx8fHwxNzYzNTY2MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    planetType: 'earth',
    coordinates: { lat: 64.9631, lng: -19.0208 }
  },
  {
    id: 'canyon',
    name: 'Grand Canyon',
    location: 'USA',
    imageUrl: 'https://images.unsplash.com/photo-1719285662874-4c23533ecb98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW55b24lMjB0ZXJyYWluJTIwYWVyaWFsfGVufDF8fHx8MTc2MzU2NjI0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    planetType: 'earth',
    coordinates: { lat: 36.1069, lng: -112.1129 }
  },
];

const CELESTIAL_BODIES = [
  { value: 'earth', label: 'Earth' },
  { value: 'mars', label: 'Mars' },
  { value: 'moon', label: 'Moon' },
  { value: 'venus', label: 'Venus' },
  { value: 'titan', label: 'Titan (Saturn\'s moon)' },
  { value: 'europa', label: 'Europa (Jupiter\'s moon)' },
];

export function TemplateSelectionPage({ onContinue }: TemplateSelectionPageProps) {
  const [activeTab, setActiveTab] = useState<TemplateMode>('presets');
  const [selectedCelestialBody, setSelectedCelestialBody] = useState('earth');
  const [selectedLocation, setSelectedLocation] = useState<PreconfiguredLocation | null>(PRECONFIGURED_LOCATIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [googleMapsLocation, setGoogleMapsLocation] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(PRECONFIGURED_LOCATIONS.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLocations = PRECONFIGURED_LOCATIONS.slice(startIndex, endIndex);

  const handleContinue = () => {
    if (activeTab === 'google-maps') {
      onContinue('google-maps', { location: googleMapsLocation, celestialBody: selectedCelestialBody });
    } else {
      onContinue('presets', { location: selectedLocation, celestialBody: selectedCelestialBody });
    }
  };

  const handleImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Importing file:', file.name);
      // Handle file import logic here
    }
  };

  return (
    <div className="w-screen h-full flex flex-col md:flex-row bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Left Panel - Actions */}
      <div className="w-full md:w-[40%] lg:w-[35%] h-auto md:h-full bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm md:border-r border-purple-700/50 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-xl space-y-4 sm:space-y-6 md:space-y-8">
          {/* Celestial Body Selection */}
          <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
            <Label className="text-purple-200 mb-2 sm:mb-3 md:mb-4 block text-sm sm:text-base">Select Celestial Body</Label>
            <Select value={selectedCelestialBody} onValueChange={setSelectedCelestialBody}>
              <SelectTrigger className="bg-gray-700/50 border-purple-600 text-white h-10 sm:h-12 md:h-14 text-sm sm:text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-purple-600">
                {CELESTIAL_BODIES.map((body) => (
                  <SelectItem key={body.value} value={body.value} className="text-white text-sm sm:text-base">
                    {body.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs sm:text-sm text-purple-300 mt-2 md:mt-3">
              Choose the astronomical body for your terrain generation
            </p>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3 sm:space-y-4">
            <Button
              onClick={handleContinue}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-3xl transition-all"
            >
              Continue
            </Button>

            <Button
              onClick={handleImport}
              variant="outline"
              className="w-full border-purple-600 bg-purple-900/40 hover:bg-purple-700/50 text-purple-100 hover:text-white h-14 sm:h-16 md:h-20 text-lg sm:text-xl md:text-3xl transition-all"
            >
              <Upload className="mr-2 md:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              Import
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".obj,.fbx,.gltf,.stl,.png,.jpg,.heightmap"
              className="hidden"
              onChange={handleFileImport}
            />
          </div>

          <Card className="bg-purple-900/40 backdrop-blur-sm border-purple-700/50 p-3 sm:p-4 hidden md:block">
            <p className="text-purple-200 text-xs sm:text-sm">
              Import topology maps, height maps, or select from pre-configured locations and planetary bodies.
            </p>
          </Card>
        </div>
      </div>

      {/* Right Panel - Selection Mode */}
      <div className="w-full md:w-[60%] lg:w-[65%] h-full bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TemplateMode)} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 border border-purple-700/50 mb-4 sm:mb-6 md:mb-8 h-10 sm:h-12 md:h-16 p-1">
              <TabsTrigger 
                value="presets" 
                className="text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs sm:text-sm md:text-lg transition-all"
              >
                <span className="hidden sm:inline">Pre-configured Locations</span>
                <span className="sm:hidden">Presets</span>
              </TabsTrigger>
              <TabsTrigger 
                value="google-maps" 
                className="text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs sm:text-sm md:text-lg transition-all"
              >
                <Map className="mr-1 md:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="hidden sm:inline">Google Maps</span>
                <span className="sm:hidden">Maps</span>
              </TabsTrigger>
            </TabsList>

            {/* Pre-configured Locations */}
            <TabsContent value="presets" className="mt-0">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Location Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {currentLocations.map((location) => (
                    <Card
                      key={location.id}
                      className={`bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-2 sm:p-3 md:p-4 cursor-pointer transition-all hover:border-purple-500 hover:shadow-lg ${
                        selectedLocation?.id === location.id ? 'border-purple-400 ring-2 ring-purple-400' : ''
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="aspect-video w-full overflow-hidden rounded-lg mb-2 md:mb-3">
                        <ImageWithFallback
                          src={location.imageUrl}
                          alt={location.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <h3 className="text-purple-100 mb-1 text-xs sm:text-sm md:text-base">{location.name}</h3>
                      <p className="text-purple-300 text-[10px] sm:text-xs md:text-sm">{location.location}</p>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="text-purple-200 hover:text-white hover:bg-purple-700/50 disabled:opacity-50 h-8 w-8 sm:h-9 sm:w-9 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={page}
                          variant={page === currentPage ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className={
                            page === currentPage
                              ? 'bg-purple-600 text-white hover:bg-purple-700 h-8 w-8 sm:h-9 sm:w-9 p-0 text-xs sm:text-sm'
                              : 'text-purple-200 hover:text-white hover:bg-purple-700/50 h-8 w-8 sm:h-9 sm:w-9 p-0 text-xs sm:text-sm'
                          }
                        >
                          {page}
                        </Button>
                      );
                    } else if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <span key={page} className="text-purple-300 px-1 sm:px-2 text-xs sm:text-sm">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="text-purple-200 hover:text-white hover:bg-purple-700/50 disabled:opacity-50 h-8 w-8 sm:h-9 sm:w-9 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Selected Location Info */}
                {selectedLocation && (
                  <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6 mt-4 sm:mt-6">
                    <h3 className="text-purple-100 text-base sm:text-lg md:text-xl mb-1 sm:mb-2">Selected: {selectedLocation.name}</h3>
                    <p className="text-purple-300 text-sm sm:text-base">Location: {selectedLocation.location}</p>
                    {selectedLocation.coordinates && (
                      <p className="text-purple-300 text-xs sm:text-sm mt-1">
                        Coordinates: {selectedLocation.coordinates.lat.toFixed(4)}, {selectedLocation.coordinates.lng.toFixed(4)}
                      </p>
                    )}
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Google Maps Selection */}
            <TabsContent value="google-maps" className="mt-0">
              <Card className="bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <Label className="text-purple-200 mb-2 md:mb-3 block text-sm sm:text-base">Enter Location or Coordinates</Label>
                    <input
                      type="text"
                      placeholder="e.g., Grand Canyon, Arizona"
                      value={googleMapsLocation}
                      onChange={(e) => setGoogleMapsLocation(e.target.value)}
                      className="w-full h-10 sm:h-12 md:h-14 bg-gray-700/50 border border-purple-600 rounded-lg px-3 md:px-4 text-white placeholder:text-purple-400 text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  {/* Google Maps Placeholder */}
                  <div className="w-full h-48 sm:h-64 md:h-96 bg-gray-700/30 border border-purple-600/50 rounded-lg flex items-center justify-center">
                    <div className="text-center px-4">
                      <Map className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-purple-400 mx-auto mb-2 sm:mb-3 md:mb-4" />
                      <p className="text-purple-300 text-sm sm:text-base">Google Maps integration</p>
                      <p className="text-purple-400 text-xs sm:text-sm mt-1 sm:mt-2">
                        Search for a location to preview terrain
                      </p>
                    </div>
                  </div>

                  <Card className="bg-purple-900/40 border-purple-700/50 p-3 sm:p-4">
                    <p className="text-purple-200 text-xs sm:text-sm">
                      Enter a location name or coordinates to fetch real-world terrain data. 
                      The system will generate a heightmap based on the selected area.
                    </p>
                  </Card>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}