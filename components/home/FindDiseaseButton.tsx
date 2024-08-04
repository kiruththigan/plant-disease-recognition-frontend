'use client'
import React from "react";
import { Button } from "../ui/button";
import { useImageStore } from "@/stores/image.store";

const FindDiseaseButton: React.FC = () => {
  const file = useImageStore((state) => state.file);
  return (
    <div className="flex">
      {file && (
        <Button className="bg-[#37FBB3] hover:bg-[#2ac78e] mx-auto">
          Find Disease
        </Button>
      )}
    </div>
  );
};

export default FindDiseaseButton;
