import { useState } from 'react';
import { MapPreview3D } from './components/MapPreview3D';
import { NodeEditor } from './components/NodeEditor';
import { VariablesPanel } from './components/VariablesPanel';
import { ExportPage } from './components/ExportPage';
import { Header } from './components/Header';
import { PreferencesDialog } from './components/PreferencesDialog';
import { ExportHistoryDialog } from './components/ExportHistoryDialog';
import { LandingPage } from './components/LandingPage';
import { PlanetConfigPage } from './components/PlanetConfigPage';
import { TemplateSelectionPage } from './components/TemplateSelectionPage';
import { UserProfilePage } from './components/UserProfilePage';
import { MapSettings } from './types';
import { PlanetSettings } from './types/planet';

export default function App() {
  const [mapSettings, setMapSettings] = useState<MapSettings>({
    width: 50,
    depth: 50,
    heightScale: 10,
    octaves: 4,
    persistence: 0.5,
    lacunarity: 2,
    seed: 1234,
    wireframe: false,
  });

  const [planetSettings, setPlanetSettings] = useState<PlanetSettings | null>(null);

  const [currentPage, setCurrentPage] = useState<'landing' | 'template' | 'planet' | 'editor' | 'export' | 'profile'>('landing');
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [previousPage, setPreviousPage] = useState<'landing' | 'template' | 'planet' | 'editor' | 'export'>('landing');

  const navigateToProfile = () => {
    setPreviousPage(currentPage as any);
    setCurrentPage('profile');
  };

  const navigateBackFromProfile = () => {
    setCurrentPage(previousPage);
  };

  // Landing page
  if (currentPage === 'landing') {
    return (
      <>
        <LandingPage 
          onCreateMap={() => setCurrentPage('planet')}
          onUsePreconfigured={() => setCurrentPage('template')}
          onOpenPreferences={() => setPreferencesOpen(true)}
          onOpenHistory={() => setHistoryOpen(true)}
          onOpenProfile={navigateToProfile}
        />
        <PreferencesDialog open={preferencesOpen} onOpenChange={setPreferencesOpen} />
        <ExportHistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
      </>
    );
  }

  // User Profile page
  if (currentPage === 'profile') {
    return (
      <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <Header 
          onOpenProfile={navigateToProfile}
          showBackButton={true}
          onBack={navigateBackFromProfile}
        />
        <div className="flex-1 overflow-hidden">
          <UserProfilePage />
        </div>
      </div>
    );
  }

  // Template selection page
  if (currentPage === 'template') {
    return (
      <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <Header 
          onOpenProfile={navigateToProfile}
          onOpenPreferences={() => setPreferencesOpen(true)}
          onOpenHistory={() => setHistoryOpen(true)}
          showBackButton={true}
          onBack={() => setCurrentPage('landing')}
        />
        <div className="flex-1 overflow-hidden">
          <TemplateSelectionPage 
            onContinue={(mode, data) => {
              console.log('Template selected:', mode, data);
              // Apply template data to map settings
              if (mode === 'presets' && data.location) {
                setMapSettings({
                  ...mapSettings,
                  seed: Math.floor(Math.random() * 10000),
                });
              }
              setCurrentPage('planet');
            }} 
          />
        </div>
        <PreferencesDialog open={preferencesOpen} onOpenChange={setPreferencesOpen} />
        <ExportHistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
      </div>
    );
  }

  // Planet configuration page
  if (currentPage === 'planet') {
    return (
      <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <Header 
          onOpenProfile={navigateToProfile}
          onOpenPreferences={() => setPreferencesOpen(true)}
          onOpenHistory={() => setHistoryOpen(true)}
          showBackButton={true}
          onBack={() => setCurrentPage('landing')}
        />
        <div className="flex-1 overflow-hidden">
          <PlanetConfigPage 
            onContinue={(settings) => {
              setPlanetSettings(settings);
              setCurrentPage('editor');
            }} 
          />
        </div>
        <PreferencesDialog open={preferencesOpen} onOpenChange={setPreferencesOpen} />
        <ExportHistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
      </div>
    );
  }

  if (currentPage === 'export') {
    return (
      <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <Header 
          onOpenProfile={navigateToProfile}
          onOpenPreferences={() => setPreferencesOpen(true)}
          onOpenHistory={() => setHistoryOpen(true)}
          showBackButton={true}
          onBack={() => setCurrentPage('editor')}
        />
        <div className="flex-1 overflow-hidden">
          <ExportPage onBack={() => setCurrentPage('editor')} />
        </div>
        <PreferencesDialog open={preferencesOpen} onOpenChange={setPreferencesOpen} />
        <ExportHistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      <Header 
        onOpenProfile={navigateToProfile}
        onOpenPreferences={() => setPreferencesOpen(true)}
        onOpenHistory={() => setHistoryOpen(true)}
        showBackButton={true}
        onBack={() => setCurrentPage('landing')}
      />
      
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
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
              onExport={() => setCurrentPage('export')}
            />
          </div>
        </div>
      </div>

      <PreferencesDialog open={preferencesOpen} onOpenChange={setPreferencesOpen} />
      <ExportHistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
    </div>
  );
}