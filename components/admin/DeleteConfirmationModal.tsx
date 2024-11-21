"use client";

import { useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useDiseaseTableStore } from "@/stores/table.store";

interface DeleteConfirmationModalProps {
  id: number;
  disease: string;
}

export default function DeleteConfirmationModal({
  disease,
  id,
}: DeleteConfirmationModalProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setIsDataRefetch } = useDiseaseTableStore();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("api/delete-solution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ id: id }),
      });
      const data = await response.json();

      if (data?.success) {
        setOpen(false);
        setIsDataRefetch();
        toast.success("Success", {
          description: "Solution has been deleted",
        });
      }
    } catch (error: any) {
      console.log("Error while update solution", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Trash2 size={18} className=" cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the{" "}
            <span className=" text-[#37fbb3]">{disease}</span> and remove it
            from our database.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-center md:justify-end items-center gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            className="flex justify-center items-center gap-2"
          >
            {isLoading && (
              <span>
                <Loader2 size={20} className="animate-spin" />
              </span>
            )}
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
