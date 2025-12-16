import { LandingPage } from '../components/LandingPage';
import { PreferencesDialog } from '../components/PreferencesDialog';
import { ExportHistoryDialog } from '../components/ExportHistoryDialog';
import { useDialogsContext } from '../contexts/DialogsContext';

interface LandingPageWrapperProps {
  onCreateMap: () => void;
  onUsePreconfigured: () => void;
  onOpenProfile: () => void;
}

export const LandingPageWrapper = ({
  onCreateMap,
  onUsePreconfigured,
  onOpenProfile,
}: LandingPageWrapperProps) => {
  const { preferencesOpen, setPreferencesOpen, historyOpen, setHistoryOpen, openPreferences, openHistory } = useDialogsContext();
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