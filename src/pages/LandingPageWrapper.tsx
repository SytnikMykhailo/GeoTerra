import { LandingPage } from '../components/LandingPage';
import { PreferencesDialog } from '../components/PreferencesDialog';
import { ExportHistoryDialog } from '../components/ExportHistoryDialog';

interface LandingPageWrapperProps {
  onCreateMap: () => void;
  onUsePreconfigured: () => void;
  onOpenProfile: () => void;
  preferencesOpen: boolean;
  setPreferencesOpen: (open: boolean) => void;
  historyOpen: boolean;
  setHistoryOpen: (open: boolean) => void;
  openPreferences: () => void;
  openHistory: () => void;
}

export const LandingPageWrapper = ({
  onCreateMap,
  onUsePreconfigured,
  onOpenProfile,
  preferencesOpen,
  setPreferencesOpen,
  historyOpen,
  setHistoryOpen,
  openPreferences,
  openHistory,
}: LandingPageWrapperProps) => {
  return (
    <>
      <LandingPage 
        onCreateMap={onCreateMap}
        onUsePreconfigured={onUsePreconfigured}
        onOpenPreferences={openPreferences}
        onOpenHistory={openHistory}
        onOpenProfile={onOpenProfile}
      />
      <PreferencesDialog open={preferencesOpen} onOpenChange={setPreferencesOpen} />
      <ExportHistoryDialog open={historyOpen} onOpenChange={setHistoryOpen} />
    </>
  );
};