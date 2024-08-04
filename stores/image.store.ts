import { create } from "zustand";

interface ImageStore {
  file: any;
  setFile: (file: any) => void;
}

export const useImageStore = create<ImageStore>()((set) => ({
  file: "",
  setFile: (file) => set({ file: file }),
}));
