import { useImageStore } from "@/stores/image.store";
import { useLocale } from "next-intl";
import React from "react";

const Solution = () => {
  const locale = useLocale();
  const solution = useImageStore((state) => state.solution);
  return (
    <>
      {solution?.[locale] && (
        <div className="lg:mt-14 max-w-[500px]">
          <div className="text-xl font-medium">Direct Control</div>
          <div className="text-white text-md whitespace-pre-wrap">
            {solution?.[locale]}
          </div>
        </div>
      )}
    </>
  );
};

export default Solution;
