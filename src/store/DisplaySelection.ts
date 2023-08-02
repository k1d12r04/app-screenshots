import { create } from 'zustand';

interface DisplaySelectionState {
  selectedDisplay: string;
  setSelectedDisplay: (selectedDisplay: string) => void;
}

export const useDisplaySelectionStore = create<DisplaySelectionState>(set => ({
  selectedDisplay: 'IPHONE_65',
  setSelectedDisplay: (selectedDisplay: string) => set({ selectedDisplay }),
}));
