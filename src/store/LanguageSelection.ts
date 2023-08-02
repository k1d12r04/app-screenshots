import { create } from 'zustand';

interface LanguageSelectionState {
  selectedLanguage: string;
  setSelectedLanguage: (selectedLanguage: string) => void;
}

export const useLanguageSelectionStore = create<LanguageSelectionState>(
  set => ({
    selectedLanguage: 'en',
    setSelectedLanguage: (selectedLanguage: string) =>
      set({ selectedLanguage }),
  })
);
