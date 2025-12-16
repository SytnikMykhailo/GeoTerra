import { useState } from 'react';

type Page = 'landing' | 'template' | 'planet' | 'editor' | 'export' | 'profile';

export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [previousPage, setPreviousPage] = useState<Page>('landing');

  const navigateTo = (page: Page) => {
    setPreviousPage(currentPage);
    setCurrentPage(page);
  };

  const navigateBack = () => {
    setCurrentPage(previousPage);
  };

  const navigateToProfile = () => {
    setPreviousPage(currentPage);
    setCurrentPage('profile');
  };

  return {
    currentPage,
    previousPage,
    navigateTo,
    navigateBack,
    navigateToProfile,
  };
};