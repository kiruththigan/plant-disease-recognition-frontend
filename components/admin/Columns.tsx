"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../data-table/DataTableColumnHeader";
import { TableDataSchema } from "../data-table/schema";
import { format, parseISO } from "date-fns";
import Actions from "./Actions";

export const Columns: ColumnDef<TableDataSchema>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-normal flex items-center gap-2 text-[14px] text-[#9da4ae]">
          {row.getValue("id")}
        </span>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "disease",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Disease" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-normal text-[13px] text-[#9da4ae] flex items-center gap-2">
          {row.getValue("disease")}
        </span>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "en",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="English" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-normal text-[13px] text-[#9da4ae]">
          {row.getValue("en")}
        </span>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "ta",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tamil" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-normal text-[13px] text-[#9da4ae]">
          {row.getValue("ta")}
        </span>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "sh",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sinhala" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[500px] truncate font-normal text-[13px] text-[#9da4ae]">
          {row.getValue("sh")}
        </span>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const timestamp = row.getValue("createdAt");
      const dateObject = parseISO(timestamp!.toString());
      const date = format(dateObject, "yyyy-MM-dd");
      const time = format(dateObject, "HH:mm");
      return (
        <span className="max-w-[500px] truncate font-normal text-[11px] text-[#9da4ae]">
          {time}
          <br />
          {date}
        </span>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated At" />
    ),
    cell: ({ row }) => {
      const timestamp = row.getValue("updatedAt");
      const dateObject = parseISO(timestamp!.toString());
      const date = format(dateObject, "yyyy-MM-dd");
      const time = format(dateObject, "HH:mm");
      return (
        <span className="max-w-[500px] truncate font-normal text-[11px] text-[#9da4ae]">
          {time}
          <br />
          {date}
        </span>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => {
      return <Actions row={row?.original} />;
    },
  },
];
