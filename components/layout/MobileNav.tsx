"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  navItems,
  getLabel,
  isNavItemActive,
  type NavItem,
} from "@/data/navigation";
import logo from "@/assets/images/logo/logo.png";

interface MobileNavProps {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, isClosing, onClose }: MobileNavProps) {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const { language } = useLanguage();
  const pathname = usePathname();

  if (!isOpen) return null;

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const renderNavItem = (item: NavItem) => {
    const active = isNavItemActive(item, pathname);
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = openDropdownId === item.id;

    if (hasChildren) {
      return (
        <div key={item.id} className="border-b border-gray-100">
          <div className="flex items-center justify-between py-2">
            <Link
              href={item.url}
              className={`font-medium text-lg transition-colors ${
                active ? "text-primary" : "text-gray-800 hover:text-primary"
              }`}
              onClick={onClose}
            >
              {getLabel(item, language)}
            </Link>
            <button
              onClick={() => toggleDropdown(item.id)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaChevronDown
                className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {isExpanded && (
            <div className="pl-4 pb-2 flex flex-col gap-2 animate-[fade-in_0.2s_ease-out]">
              {item.children!.map((child) => (
                <Link
                  key={child.id}
                  href={child.url}
                  className="text-gray-600 hover:text-primary transition-colors py-1"
                  onClick={onClose}
                >
                  {getLabel(child, language)}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Simple nav item (no children)
    return (
      <Link
        key={item.id}
        href={item.url}
        className={`font-medium text-lg py-2 border-b border-gray-100 transition-colors ${
          active ? "text-primary" : "text-gray-800 hover:text-primary"
        }`}
        onClick={onClose}
      >
        {getLabel(item, language)}
      </Link>
    );
  };

  const animationClass = isClosing
    ? "animate-[slide-right_0.3s_ease-out_forwards]"
    : "animate-[slide-left_0.3s_ease-out]";

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 lg:hidden ${animationClass}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col lg:hidden ${animationClass}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Image
            src={logo.src}
            alt="Logo"
            width={282}
            height={100}
            className="w-[100px] h-auto"
          />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col gap-4">
            {navItems.map(renderNavItem)}
          </div>

          {/* Phone */}
          <div className="mt-8">
            <a
              href="tel:+4930123456789"
              className="flex items-center gap-3 text-primary font-medium"
            >
              <div className="w-10 h-10 bg-primary-100 flex items-center justify-center rounded-full">
                <FaPhoneAlt className="w-4 h-4" />
              </div>
              <span>+49 30 123 456 789</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-100 flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-100 flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-100 flex items-center justify-center rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

