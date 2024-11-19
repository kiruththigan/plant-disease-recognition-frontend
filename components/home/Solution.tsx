import { useImageStore } from "@/stores/image.store";
import { useLocale } from "next-intl";
import React from "react";

const Solution = () => {
  const locale = useLocale();
  const solution = useImageStore((state) => state.solution);
  return (
    <>
      {solution?.[locale] && (
        <div className="lg:mt-14">
          <div className="text-xl font-medium">Solution</div>
          <div className="text-white text-md">{solution?.[locale]}</div>
        </div>
      )}
    </>
  );
};

export default Solution;
