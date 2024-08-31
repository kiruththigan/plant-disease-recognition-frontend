"use client";
import React from "react";
import FileUploader from "./FileUploader";
import FindDiseaseButton from "./FindDiseaseButton";
import { useImageStore } from "@/stores/image.store";
import Camera from "./Camera";

const DiseaseFindWidget = () => {
  const isCameraOpen = useImageStore((state) => state.isCameraOpen);
  const file = useImageStore((state) => state.file);

  return (
    <div className="space-y-8">
      {(!isCameraOpen || file) && <FileUploader />}

      <Camera />

      <FindDiseaseButton />
    </div>
  );
};

export default DiseaseFindWidget;
