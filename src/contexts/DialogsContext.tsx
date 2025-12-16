import { createContext, useContext, useState, ReactNode } from 'react';

interface DialogsContextType {
  preferencesOpen: boolean;
  setPreferencesOpen: (open: boolean) => void;
  historyOpen: boolean;
  setHistoryOpen: (open: boolean) => void;
  openPreferences: () => void;
  openHistory: () => void;
}

const DialogsContext = createContext<DialogsContextType | undefined>(undefined);

export function DialogsProvider({ children }: { children: ReactNode }) {
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const openPreferences = () => setPreferencesOpen(true);
  const openHistory = () => setHistoryOpen(true);

  return (
    <DialogsContext.Provider
      value={{
        preferencesOpen,
        setPreferencesOpen,
        historyOpen,
        setHistoryOpen,
        openPreferences,
        openHistory,
      }}
    >
      {children}
    </DialogsContext.Provider>
  );
}

export function useDialogsContext() {
  const context = useContext(DialogsContext);
  if (!context) {
    throw new Error('useDialogsContext must be used within DialogsProvider');
  }
  return context;
}
