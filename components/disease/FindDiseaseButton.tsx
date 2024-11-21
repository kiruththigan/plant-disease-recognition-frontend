"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useImageStore } from "@/stores/image.store";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

const FindDiseaseButton: React.FC = () => {
  const t = useTranslations("FindDisease");
  const file = useImageStore((state) => state.file);
  const isLoadingDisease = useImageStore((state) => state.isLoadingDisease);
  const setIsLoadingDisease = useImageStore(
    (state) => state.setIsLoadingDisease
  );
  const disease = useImageStore((state) => state.disease);
  const setDisease = useImageStore((state) => state.setDisease);
  const setSolution = useImageStore((state) => state.setSolution);

  const handleDisease = async () => {
    setIsLoadingDisease(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/find-disease", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data?.success) {
        setDisease(data?.data?.prediction);
        setSolution(data?.solution);
      }
    } catch (e: any) {
      console.log("Error while predict disease ", e);
    } finally {
      setIsLoadingDisease(false);
    }
  };

  useEffect(() => {
    setDisease("");
    setSolution(null);
  }, [file]);

  return (
    <div className="flex">
      {file && (
        <Button
          className="bg-[#37FBB3] hover:bg-[#2ac78e] mx-auto space-x-2"
          onClick={handleDisease}
          disabled={!file || isLoadingDisease || disease ? true : false}
        >
          {isLoadingDisease && <Loader2 className="animate-spin size-5" />}
          <div>{t("find_disease")}</div>
        </Button>
      )}
    </div>
  );
};

export default FindDiseaseButton;
