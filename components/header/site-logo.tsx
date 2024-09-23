'use client'
import { useTranslations } from "next-intl";
import React from "react";

const SiteLogo: React.FC = () => {
  const t=useTranslations("System")
  return (
    <div className="site-logo font-exo2 uppercase">
      {t("title")}
    </div>
  );
};

export default SiteLogo;
