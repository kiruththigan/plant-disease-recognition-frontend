"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "../data-table/DataTable";
import { useDiseaseTableStore } from "@/stores/table.store";
import { Columns } from "./Columns";

const TableSection: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  
  const {
    zPageIndex,
    zPageSize,
    setTotalPageCount,
    sortColumn,
    isSortDESC,
    isDataRefetch,
    debounceSearchKey,
    setIsLoading,
  } = useDiseaseTableStore();

  const fetchAllDiseases = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("api/fetch-all-solutions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageIndex: zPageIndex,
          pageSize: zPageSize,
          sortColumn: sortColumn,
          isSortDESC: isSortDESC,
          searchKey: debounceSearchKey,
        }),
      });
      const data = await response.json();
      console.log("data", data);

      if (data?.success) {
        setData(data?.data);
        setTotalPageCount(data?.pages);
      } else {
        setData([]);
      }
    } catch (error: any) {
      console.log("Error while fetchAllDiseases", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllDiseases();
  }, [
    zPageIndex,
    zPageSize,
    sortColumn,
    isSortDESC,
    isDataRefetch,
    debounceSearchKey,
  ]);

  return (
    <div className="space-y-5">
      <div className="text-xl font-medium text-left">
        Diseases and Solutions
      </div>
      <div>
        <DataTable data={data as any[]} columns={Columns} />
      </div>
    </div>
  );
};

export default TableSection;
