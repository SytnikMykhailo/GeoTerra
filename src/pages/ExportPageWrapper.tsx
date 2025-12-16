import { ExportPage } from '../components/ExportPage';

interface ExportPageWrapperProps {
  onBack: () => void;
}

export const ExportPageWrapper = ({ onBack }: ExportPageWrapperProps) => {
  return <ExportPage onBack={onBack} />;
};