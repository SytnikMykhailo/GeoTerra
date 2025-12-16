import { ReactNode } from 'react';
import { Header } from './Header';
import { PreferencesDialog } from './PreferencesDialog';
import { ExportHistoryDialog } from './ExportHistoryDialog';
import { useDialogsContext } from '../contexts/DialogsContext';

interface LayoutProps {
  children: ReactNode;
  onOpenProfile: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const Layout = ({
  children,
  onOpenProfile,
  showBackButton,
  onBack,
}: LayoutProps) => {
  const { preferencesOpen, setPreferencesOpen, historyOpen, setHistoryOpen, openPreferences, openHistory } = useDialogsContext();
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Header 
        onOpenProfile={onOpenProfile}
        onOpenPreferences={openPreferences}
        onOpenHistory={openHistory}
        showBackButton={showBackButton}
        onBack={onBack}
      />
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
      <PreferencesDialog open={preferencesOpen} onOpenChange={setPreferencesOpen} />
      <ExportHistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
    </div>
  );
};