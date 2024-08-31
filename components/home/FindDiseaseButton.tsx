"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useImageStore } from "@/stores/image.store";
import axios from "axios";
import { Loader2 } from "lucide-react";

const FindDiseaseButton: React.FC = () => {
  const file = useImageStore((state) => state.file);
  const isLoadingDisease = useImageStore((state) => state.isLoadingDisease);
  const setIsLoadingDisease = useImageStore(
    (state) => state.setIsLoadingDisease
  );
  const disease = useImageStore((state) => state.disease);
  const setDisease = useImageStore((state) => state.setDisease);

  const handleDisease = async () => {
    setIsLoadingDisease(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/predict`;

      const header = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      };

      const result = await axios.post(url, formData, header);
      setDisease(result?.data?.prediction);

      console.log("result : ", result?.data?.prediction);
    } catch (e: any) {
      console.log("Error while predict disease ", e);
    } finally {
      setIsLoadingDisease(false);
    }
  };

  useEffect(() => {
    setDisease("");
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
          <div>Find Disease</div>
        </Button>
      )}
    </div>
  );
};

export default FindDiseaseButton;
