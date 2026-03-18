"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import {
  navItems,
  getLabel,
  isNavItemActive,
  type NavItem,
} from "@/data/navigation";

export default function DesktopNav() {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const renderNavItem = (item: NavItem) => {
    const active = isNavItemActive(item, pathname);
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openDropdownId === item.id;

    if (hasChildren) {
      return (
        <div
          key={item.id}
          className="h-full w-[96px] relative flex items-center"
          onMouseLeave={() => setOpenDropdownId(null)}
        >
          <button
            className={`h-full w-full flex items-center justify-center gap-1 font-medium text-gray-800 hover:text-primary cursor-pointer transition-colors relative ${
              active ? "text-primary" : ""
            }`}
            onClick={() => router.push(item.url)}
            onMouseEnter={() => setOpenDropdownId(item.id)}
          >
            {getLabel(item, language)}
            <FaChevronDown
              className={`w-4 h-4 ${
                isOpen ? "rotate-180 duration-300" : "rotate-0 duration-300"
              }`}
            />
          </button>
          {active && (
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
          )}

          {isOpen && (
            <div className="absolute top-full left-0 w-56 bg-primary-darkest shadow-lg py-2 z-50 animate-[slide-up_0.3s_ease-out]">
              {item.children!.map((child) => (
                <Link
                  key={child.id}
                  href={child.url}
                  className="block px-4 py-2 text-white hover:text-primary-300 transition-colors"
                  onClick={() => setOpenDropdownId(null)}
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
        className={`h-full w-[96px] text-center font-medium text-gray-800 hover:text-primary transition-colors flex items-center justify-center relative ${
          active ? "text-primary" : ""
        }`}
      >
        {getLabel(item, language)}
        {active && (
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
        )}
      </Link>
    );
  };

  return (
    <div className="hidden lg:flex lg:h-full items-center gap-8">
      {navItems.map(renderNavItem)}
    </div>
  );
}
