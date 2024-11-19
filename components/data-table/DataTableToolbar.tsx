"use client";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DataTableViewOptions } from "./DataTableViewOptions";
import DiseaseModal from "../admin/DiseaseModal";
import { useDiseaseTableStore } from "@/stores/table.store";
import { useCallback } from "react";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const { searchKey, setSearchKey, setDebounceSearchKey } =
    useDiseaseTableStore();

  const debouncedSearchKey = useCallback(
    debounce((input: string) => {
      setDebounceSearchKey(input);
    }, 1500),
    []
  );

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          value={searchKey}
          onChange={(event) => {
            setSearchKey(event.target.value);
            debouncedSearchKey(event.target.value);
          }}
          className="h-9 w-[150px] md:w-[220px] lg:w-[280px] focus-visible:ring-0 top-"
        />
        <DataTableViewOptions table={table} />
      </div>
      <DiseaseModal />
    </div>
  );
}
