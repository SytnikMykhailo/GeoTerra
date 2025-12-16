import { useState } from 'react';

export const useDialogs = () => {
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const openPreferences = () => setPreferencesOpen(true);
  const openHistory = () => setHistoryOpen(true);

  return {
    preferencesOpen,
    setPreferencesOpen,
    historyOpen,
    setHistoryOpen,
    openPreferences,
    openHistory,
  };
};