"use client";
import { CloudUpload, Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useImageStore } from "@/stores/image.store";
import { useTranslations } from "next-intl";

const FileUploader: React.FC = () => {
  const t = useTranslations("FileUploader");
  const file = useImageStore((state) => state.file);
  const setFile = useImageStore((state) => state.setFile);
  const closeCamera = useImageStore((state) => state.closeCamera);
  const disease = useImageStore((state) => state.disease);

  const [isHovered, setIsHovered] = useState(false);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
  });

  useEffect(() => {
    if (acceptedFiles?.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, [acceptedFiles]);

  return (
    <div className="space-y-8">
      <div className="text-center text-xl font-bold">{disease}</div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {file ? (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={URL.createObjectURL(file)}
              alt={file?.path}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-w-[500px] h-full max-h-[500px] rounded-lg hover:bg-opacity-50"
            />
            {isHovered && (
              <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center gap-10 bg-[#00000088] rounded-lg">
                <Edit
                  onClick={() => {
                    closeCamera();
                    open();
                  }}
                  className="size-8 md:size-[50px] cursor-pointer hover:scale-110 "
                />
                <Trash2
                  onClick={() => {
                    setFile("");
                    closeCamera();
                  }}
                  className="size-8 md:size-[50px] cursor-pointer hover:scale-110 "
                />
              </div>
            )}
          </div>
        ) : (
          <div
            className="cursor-pointer rounded-lg max-w-[500px] flex flex-col justify-center items-center space-y-5 p-10 border border-dashed border-[#000000] dark:border-[#37FBB3]"
            onClick={open}
          >
            <div>
              <CloudUpload className=" size-10 md:size-20" />
            </div>
            <div className="font-exo2 text-2xl text-center">
              {t("description")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
