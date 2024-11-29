"use client";
import Link from "next/link";
import React from "react";
import {
  Sprout,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import Image from "next/image";
import logo from "/public/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`w-full mt-40`}>
      <footer className="bg-gray-900 text-white py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src={logo}
                  alt="logo"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="h-20 w-20"
                />
                <h3 className="text-2xl font-bold text-[#37fbb3]">
                  Plant Disease Recognition
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Protecting your plants with cutting-edge AI technology.
                <br className="hidden md:flex" /> Identify diseases quickly and
                get expert treatment advice.
              </p>
              <div className="flex space-x-4">
                <SocialLink
                  href="https://facebook.com/senthilnesan.kiruththigan/"
                  icon={<Facebook size={20} />}
                  label="Facebook"
                />
                <SocialLink
                  href="https://twitter.com/kiruthi66"
                  icon={<Twitter size={20} />}
                  label="Twitter"
                />
                <SocialLink
                  href="https://instagram.com/kiruththigan_/"
                  icon={<Instagram size={20} />}
                  label="Instagram"
                />
                <SocialLink
                  href="https://linkedin.com/in/kiruththigan"
                  icon={<Linkedin size={20} />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://github.com/kiruththigan"
                  icon={<Github size={20} />}
                  label="GitHub"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Our Services</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-sm text-gray-400">
                <p>Velluruvai Alvai East,</p>
                <p>PointPedro, Jaffna.</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:nesankiruthi@gmail.com"
                    className="hover:text-[#37fbb3] transition-colors"
                  >
                    nesankiruthi@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+11234567890"
                    className="hover:text-[#37fbb3] transition-colors"
                  >
                    +94 (77) 281-2634
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Plant Disease Recognition. All rights
              reserved.
            </p>
            <nav className="mt-4 sm:mt-0">
              <ul className="flex space-x-4 text-sm">
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Service</FooterLink>
                <FooterLink href="#">Cookie Policy</FooterLink>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#37fbb3] transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-sm text-gray-400 hover:text-[#37fbb3] transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
