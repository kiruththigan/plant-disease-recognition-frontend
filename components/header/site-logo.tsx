"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SiteLogo: React.FC = () => {
  const t = useTranslations("System");
  return (
    <div className="site-logo font-exo2 uppercase flex">
      <div>
        <Image src={"/assets/logo.png"} alt="logo" height={0} width={0} sizes="100vw" className="h-11 w-11" />
      </div>
      <div className="hidden">{t("title")}</div>
    </div>
  );
};

export default SiteLogo;
