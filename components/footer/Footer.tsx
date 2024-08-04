"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className={`container mb-7 md:mt-[150px]`}>
      <div className="text-[12px] font-normal leading-4 relative">
        <div className="text-[#52525B]">
          Developed by{" "}
          <Link
            href="https://kiruththigan.com/"
            target="_blank"
            className="text-[#37FBB3] underline"
          >
            @Kiruththigan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
