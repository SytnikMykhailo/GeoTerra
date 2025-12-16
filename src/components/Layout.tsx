import { ReactNode } from 'react';
import { Header } from './Header';
import { PreferencesDialog } from './PreferencesDialog';
import { ExportHistoryDialog } from './ExportHistoryDialog';

interface LayoutProps {
  children: ReactNode;
  onOpenProfile: () => void;
  onOpenPreferences: () => void;
  onOpenHistory: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
  preferencesOpen: boolean;
  setPreferencesOpen: (open: boolean) => void;
  historyOpen: boolean;
  setHistoryOpen: (open: boolean) => void;
}

export const Layout = ({
  children,
  onOpenProfile,
  onOpenPreferences,
  onOpenHistory,
  showBackButton,
  onBack,
  preferencesOpen,
  setPreferencesOpen,
  historyOpen,
  setHistoryOpen,
}: LayoutProps) => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Header 
        onOpenProfile={onOpenProfile}
        onOpenPreferences={onOpenPreferences}
        onOpenHistory={onOpenHistory}
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