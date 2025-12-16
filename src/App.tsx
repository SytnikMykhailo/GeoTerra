import { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPageWrapper } from './pages/LandingPageWrapper';
import { TemplatePage } from './pages/TemplatePage';
import { PlanetPage } from './pages/PlanetPage';
import { EditorPage } from './pages/EditorPage';
import { ExportPageWrapper } from './pages/ExportPageWrapper';
import { ProfilePage } from './pages/ProfilePage';
import { useNavigation } from './hooks/useNavigation';
import { useDialogs } from './hooks/useDialogs';
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

  const { currentPage, navigateTo, navigateBack, navigateToProfile } = useNavigation();
  const { 
    preferencesOpen, 
    setPreferencesOpen, 
    historyOpen, 
    setHistoryOpen,
    openPreferences,
    openHistory 
  } = useDialogs();

  if (currentPage === 'landing') {
    return (
      <LandingPageWrapper
        onCreateMap={() => navigateTo('planet')}
        onUsePreconfigured={() => navigateTo('template')}
        onOpenProfile={navigateToProfile}
        preferencesOpen={preferencesOpen}
        setPreferencesOpen={setPreferencesOpen}
        historyOpen={historyOpen}
        setHistoryOpen={setHistoryOpen}
        openPreferences={openPreferences}
        openHistory={openHistory}
      />
    );
  }

  const pages = {
    profile: <ProfilePage />,
    template: (
      <TemplatePage
        mapSettings={mapSettings}
        setMapSettings={setMapSettings}
        onContinue={() => navigateTo('planet')}
      />
    ),
    planet: (
      <PlanetPage
        onContinue={(settings) => {
          setPlanetSettings(settings);
          navigateTo('editor');
        }}
      />
    ),
    editor: (
      <EditorPage
        mapSettings={mapSettings}
        setMapSettings={setMapSettings}
        onExport={() => navigateTo('export')}
      />
    ),
    export: <ExportPageWrapper onBack={() => navigateTo('editor')} />,
  };

  return (
    <Layout
      onOpenProfile={navigateToProfile}
      onOpenPreferences={openPreferences}
      onOpenHistory={openHistory}
      showBackButton={true}
      onBack={currentPage === 'profile' ? navigateBack : () => navigateTo('landing')}
      preferencesOpen={preferencesOpen}
      setPreferencesOpen={setPreferencesOpen}
      historyOpen={historyOpen}
      setHistoryOpen={setHistoryOpen}
    >
      {pages[currentPage as keyof typeof pages]}
    </Layout>
  );
}