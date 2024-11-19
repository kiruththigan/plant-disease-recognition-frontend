import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  id: number | null;
  setId: (id: number | null) => void;
  disease: string;
  setDisease: (disease: string) => void;
  en: string;
  setEn: (en: string) => void;
  ta: string;
  setTa: (ta: string) => void;
  sh: string;
  setSh: (sh: string) => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen: isOpen }),
  title: "add",
  setTitle: (title) => set({ title: title }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading: isLoading }),

  id: null,
  setId: (id) => set({ id: id }),
  disease: "",
  setDisease: (disease) => set({ disease: disease }),
  en: "",
  setEn: (en) => set({ en: en }),
  ta: "",
  setTa: (ta) => set({ ta: ta }),
  sh: "",
  setSh: (sh) => set({ sh: sh }),
}));
