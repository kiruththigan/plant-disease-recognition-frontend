"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./DataTablePagination";
import { useEffect, useState } from "react";
import { useDiseaseTableStore } from "@/stores/table.store";
import { DataTableToolbar } from "./DataTableToolbar";
import { Skeleton } from "../ui/skeleton";
import { Loader2 } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const {
    zPageIndex,
    setPageIndex,
    zPageSize,
    setPageSize,
    totalPageCount,
    sortColumn,
    setSortColumn,
    isSortDESC,
    setIsSortDESC,
    isLoading,
  } = useDiseaseTableStore();

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [sorting, setSorting] = useState<SortingState>([
    { id: sortColumn, desc: isSortDESC },
  ]);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: zPageIndex,
    pageSize: zPageSize,
  });

  const pagination = {
    pageIndex,
    pageSize,
  };

  useEffect(() => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  }, [pageIndex, pageSize]);

  useEffect(() => {
    console.log("columnFilters", sorting);
    setSortColumn(sorting[0]?.id);
    setIsSortDESC(sorting[0]?.desc);
  }, [sorting]);

  const table = useReactTable({
    data,
    columns,
    state: { pagination, columnVisibility, sorting },
    pageCount: totalPageCount,
    enableRowSelection: true,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
  });

  return (
    <div className="space-y-5">
      <DataTableToolbar table={table} />

      {isLoading ? (
        <Skeleton>
          <div className=" w-full h-[440px] flex justify-center items-center p-5">
            <Loader2 className="animate-spin size-6" />
          </div>
        </Skeleton>
      ) : (
        <div className="rounded-md border overflow-hidden backdrop-blur-lg shadow-custom-gold">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        className={`${header.id == "id" && "pl-5"}`}
                        key={header.id}
                        colSpan={header.colSpan}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,

                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={`${cell.column.id == "id" && "pl-5"} max-w-[250px] truncate text-[#9da4ae]`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className="border-[#4e4e4e14]">
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
      <DataTablePagination table={table} />
    </div>
  );
}
