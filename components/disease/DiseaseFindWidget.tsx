"use client";
import React from "react";
import FileUploader from "./FileUploader";
import FindDiseaseButton from "./FindDiseaseButton";
import { useImageStore } from "@/stores/image.store";
import Camera from "./Camera";
import Solution from "./Solution";

const DiseaseFindWidget = () => {
  const isCameraOpen = useImageStore((state) => state.isCameraOpen);
  const file = useImageStore((state) => state.file);

  return (
    <div className="flex flex-col lg:flex-row justify-start items-start gap-5 mb-40">
      <div className="space-y-8">
        {(!isCameraOpen || file) && <FileUploader />}

        <div className="flex lg:hidden">
          <Solution />
        </div>

        <Camera />

        <FindDiseaseButton />
      </div>
      <div className="hidden lg:flex">
        <Solution />
      </div>
    </div>
  );
};

export default DiseaseFindWidget;
