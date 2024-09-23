"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";

const LanguageSelect: React.FC = () => {
  const t = useTranslations("Languages");
  const locale = useLocale();

  async function onChange(value: string) {
    const locale = value as Locale;
    await setUserLocale(locale);
  }
  return (
    <div>
      <Select defaultValue={locale} onValueChange={onChange}>
        <SelectTrigger className="border-0 focus-visible:ring-transparent flex flex-row justify-center items-center gap-1">
          <SelectValue placeholder={t("place_holder")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="font-extrabold">{t("title")}</SelectLabel>
            <SelectItem value="en" className="font-normal">
              {t("english")}
            </SelectItem>
            <SelectItem value="ta" className="font-normal">
              {t("tamil")}
            </SelectItem>
            <SelectItem value="sh" className="font-normal" disabled>
              {t("sinhala")}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;
