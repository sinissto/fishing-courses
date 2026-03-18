"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaCartArrowDown, FaPhoneAlt } from "react-icons/fa";

import { useCart } from "@/context/CartContext";
import logo from "@/assets/images/logo/logo.png";
import Chyron from "@/components/layout/Chyron";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosingMobileMenu, setIsClosingMobileMenu] = useState(false);
  const { itemCount, setCartOpen } = useCart();

  const handleCloseMobileMenu = () => {
    setIsClosingMobileMenu(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosingMobileMenu(false);
    }, 300);
  };

  return (
    <header className="relative z-50">
      {/* Chyron - Top Bar */}
      <Chyron />

      {/* Main Navigation - Overlapping the chyron */}
      <div className="container relative">
        <nav className="h-[96px] lg:h-[128px] absolute left-4 right-4 lg:left-8 lg:right-8 -top-12 bg-white rounded-lg shadow-lg flex items-center">
          <div className="flex-1 flex justify-between items-center gap-6 h-full mx-4 lg:mx-6 xl:mx-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo.src}
                alt="Logo"
                width={282}
                height={100}
                className="w-[90px] lg:w-[140px] h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Right side - Phone and Cart */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+4930123456789"
                className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
              >
                <div className="w-10 h-10 xl:w-13 xl:h-13 bg-primary-100 flex items-center justify-center rounded-full group-hover:bg-primary-200 transition-colors">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <span className="text-[14px]/[24px] xl:text-[16px]/[26px]">
                  +49 30 123 456 789
                </span>
              </a>

              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-primary-50 rounded-full transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 xl:w-13 xl:h-13 bg-primary-100 flex items-center justify-center rounded-full group-hover:text-primary-dark transition-colors">
                  <FaCartArrowDown className="w-5 h-5 text-primary group-hover:text-primary-dark" />
                </div>
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-primary-50 rounded-full transition-colors"
                onClick={() =>
                  mobileMenuOpen
                    ? handleCloseMobileMenu()
                    : setMobileMenuOpen(true)
                }
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        isClosing={isClosingMobileMenu}
        onClose={handleCloseMobileMenu}
      />
    </header>
  );
}
