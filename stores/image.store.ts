import { create } from "zustand";

interface ImageStore {
  file: any;
  setFile: (file: any) => void;
  isLoadingDisease: boolean;
  setIsLoadingDisease: (isLoading: boolean) => void;
  disease: string;
  setDisease: (disease: string) => void;
  isCameraOpen: boolean;
  setIsCameraOpen: (isOpen: boolean) => void;
  openCamera: () => void;
  closeCamera: () => void;

  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;

  solution: PlantDiseaseSolutionType | null;
  setSolution: (solution: PlantDiseaseSolutionType | null) => void;
}

export const useImageStore = create<ImageStore>()((set) => ({
  file: "",
  setFile: (file) => set({ file: file }),
  isLoadingDisease: false,
  setIsLoadingDisease: (isLoading) => set({ isLoadingDisease: isLoading }),
  disease: "",
  setDisease: (disease) => set({ disease: disease }),
  isCameraOpen: false,
  setIsCameraOpen: (isOpen) => set({ isCameraOpen: isOpen }),
  openCamera: () => set({ isCameraOpen: true }),
  closeCamera: () => set({ isCameraOpen: false }),

  isHovered: false,
  setIsHovered: (isHovered) => set({ isHovered: isHovered }),

  solution: null,
  setSolution: (solution) => set({ solution: solution }),
}));
