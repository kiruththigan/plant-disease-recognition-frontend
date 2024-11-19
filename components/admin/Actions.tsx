import React from "react";
import { Eye, PenLine, Trash2 } from "lucide-react";
import { useModalStore } from "@/stores/modal.store";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const Actions = ({ row }: { row: any }) => {
  const { setIsOpen, setTitle, setId, setDisease, setEn, setTa, setSh } =
    useModalStore();

  const handleView = () => {
    setTitle("");
    setId(row.id);
    setDisease(row.disease);
    setEn(row.en);
    setTa(row.ta);
    setSh(row.sh);
    setIsOpen(true);
  };

  const handleEdit = () => {
    setTitle("edit");
    setId(row.id);
    setDisease(row.disease);
    setEn(row.en);
    setTa(row.ta);
    setSh(row.sh);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-2 text-[#37fbb3]">
        <Eye size={18} className=" cursor-pointer" onClick={handleView} />
        <PenLine size={18} className=" cursor-pointer" onClick={handleEdit} />
        {/* <Trash2 size={18} className=" cursor-pointer" /> */}
        <DeleteConfirmationModal id={row?.id} disease={row?.disease} />
      </div>
    </div>
  );
};

export default Actions;
