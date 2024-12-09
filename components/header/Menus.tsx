"use client";

import React, { useState } from "react";
import { Menubar } from "@/components/ui/menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Menus = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    // { name: "Home", path: "/" },
    { name: "Find Disease", path: "/disease" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      <Menubar className="border-0 bg-transparent">
        <div className="hidden sm:flex justify-start items-center">
          {items.map((item) => (
            <div
              className={`link-container text-sm font-medium p-2 rounded-sm`}
            >
              <Link
                key={item.name}
                href={item.path}
                className={`hover:text-[#37fbb3] transition-colors ${
                  pathname === item.path ? "text-[#37fbb3]" : "text-[#ffffff]"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="sm:hidden">
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>

          <div
            className={`sm:hidden w-full absolute top-16 left-0 bg-gray-900 overflow-hidden transition-all duration-500 ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {items.map((item, key) => (
              <div
                key={key}
                className={`link-container text-sm font-medium p-2 rounded-sm`}
              >
                <Link
                  key={item.name}
                  href={item.path}
                  className={`hover:text-[#37fbb3] transition-colors ${
                    pathname === item.path ? "text-[#37fbb3]" : "text-[#ffffff]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Menubar>
    </div>
  );
};

export default Menus;
