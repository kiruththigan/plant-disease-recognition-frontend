"use client";
import React from "react";
import Link from "next/link";
import SiteLogo from "@/components/header/site-logo";
import { ModeToggle } from "@/components/header/theme-mode-toggler";
import LanguageSelect from "./language-select";

const Header: React.FC = () => {
  return (
    <nav className="w-full">
      <div
        className="
        flex 
        justify-between 
        items-center 
        py-2 
        h-[60px]
        inset-x-0 
        z-10
        border-b 
        border-slate-200 
        dark:border-[#27272A]  
        bg-opacity-20 backdrop-filter backdrop-blur-sm"
      >
        <div className="container flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <SiteLogo />
            </Link>
            <div className="flex ml-4 space-x-4">{/* nav menu */}</div>
          </div>

          <div className="flex items-center space-x-6">
            <LanguageSelect />
            {/* <ModeToggle /> */}
            {/* user profile */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
