import { create } from "zustand";

interface DiseaseTableStore {
  zPageIndex: number;
  setPageIndex: (index: number) => void;
  zPageSize: number;
  setPageSize: (size: number) => void;
  totalPageCount: number;
  setTotalPageCount: (count: number) => void;

  sortColumn: string;
  setSortColumn: (column: string) => void;
  isSortDESC: boolean;
  setIsSortDESC: (isDESC: boolean) => void;

  searchKey: string;
  setSearchKey: (key: string) => void;
  debounceSearchKey: string;
  setDebounceSearchKey: (key: string) => void;

  isDataRefetch: boolean;
  setIsDataRefetch: () => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useDiseaseTableStore = create<DiseaseTableStore>((set, get) => ({
  zPageIndex: 0,
  setPageIndex: (index) => set({ zPageIndex: index }),
  zPageSize: 10,
  setPageSize: (index) => set({ zPageSize: index }),
  totalPageCount: 0,
  setTotalPageCount: (index) => set({ totalPageCount: index }),

  sortColumn: "id",
  setSortColumn: (column) => set({ sortColumn: column }),
  isSortDESC: true,
  setIsSortDESC: (isDESC) => set({ isSortDESC: isDESC }),

  searchKey: "",
  setSearchKey: (key) => set({ searchKey: key }),
  debounceSearchKey: "",
  setDebounceSearchKey: (key) => set({ debounceSearchKey: key }),

  isDataRefetch: false,
  setIsDataRefetch: () =>
    set((state) => ({ isDataRefetch: !state.isDataRefetch })),

  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading: isLoading }),
}));
