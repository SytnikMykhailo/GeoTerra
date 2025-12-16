import { PlanetConfigPage } from '../components/PlanetConfigPage';
import { PlanetSettings } from '../types/planet';

interface PlanetPageProps {
  onContinue: (settings: PlanetSettings) => void;
}

export const PlanetPage = ({ onContinue }: PlanetPageProps) => {
  return <PlanetConfigPage onContinue={onContinue} />;
};