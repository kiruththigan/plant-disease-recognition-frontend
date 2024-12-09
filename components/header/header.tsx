"use client";
import React from "react";
import Link from "next/link";
import SiteLogo from "@/components/header/SiteLogo";
import LanguageSelect from "./LanguageSelect";
import ProfileDropdown from "./ProfileDropdown";
import Menus from "./Menus";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center py-2 h-[60px] inset-x-0 z-10 bg-gray-900">
        <div className="container flex justify-between">
          <div className="flex items-center sm:gap-2">
            <Link href="/">
              <SiteLogo />
            </Link>

            {/* menu */}
            <div className="hidden sm:flex space-x-4">
              <Menus />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {pathname === "/disease" && <LanguageSelect />}
            {/* <ModeToggle /> */}
            {/* user profile */}
            <ProfileDropdown />

            {/* mobile menu icon */}
            <div className="flex sm:hidden space-x-4">
              <Menus />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
