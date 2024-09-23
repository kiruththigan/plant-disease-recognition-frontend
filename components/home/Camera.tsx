"use client";
import { useImageStore } from "@/stores/image.store";
import { CameraIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 300,
  height: 400,
  facingMode: "user",
};

const Camera = () => {
  const t = useTranslations("Camera");
  const isCameraOpen = useImageStore((state) => state.isCameraOpen);
  const openCamera = useImageStore((state) => state.openCamera);

  const webcamRef = React.useRef<Webcam>(null);
  const file = useImageStore((state) => state.file);
  const setFile = useImageStore((state) => state.setFile);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    const file = dataURLtoFile(imageSrc, "webcam-image.jpg");
    setFile(file);
  }, [webcamRef, setFile]);

  function dataURLtoFile(dataurl: any, filename: string) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  return (
    <div>
      {(!isCameraOpen || file) && (
        <div className="flex justify-center items-center">
          <div
            className="flex justify-center items-center gap-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              openCamera();
              setFile("");
            }}
          >
            <CameraIcon />
            <div>{t("use_camera")}</div>
          </div>
        </div>
      )}

      {isCameraOpen && (
        <>
          {!file && (
            <div className="space-y-8">
              <Webcam
                audio={false}
                height={400}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={300}
                videoConstraints={videoConstraints}
              />

              <div className="flex justify-center items-center">
                <div
                  className="flex justify-center items-center gap-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={capture}
                >
                  <CameraIcon />
                  <div>{t("capture")}</div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Camera;
