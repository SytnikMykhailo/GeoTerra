import { TemplateSelectionPage } from '../components/TemplateSelectionPage';
import { MapSettings } from '../types';

interface TemplatePageProps {
  mapSettings: MapSettings;
  setMapSettings: (settings: MapSettings) => void;
  onContinue: () => void;
}

export const TemplatePage = ({ mapSettings, setMapSettings, onContinue }: TemplatePageProps) => {
  const handleContinue = (mode: string, data: any) => {
    console.log('Template selected:', mode, data);
    
    if (mode === 'presets' && data.location) {
      setMapSettings({
        ...mapSettings,
        seed: Math.floor(Math.random() * 10000),
      });
    }
    
    onContinue();
  };

  return <TemplateSelectionPage onContinue={handleContinue} />;
};