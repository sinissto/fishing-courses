"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import { useRouter, usePathname } from "next/navigation";

const translations = {
  en: {
    home: "Home",
    courses: "Courses",
    aboutUs: "About Us",
    contact: "Contact",
    allCourses: "All Courses",
    beginnerCourses: "Beginner Courses",
    advancedCourses: "Advanced Courses",
  },
  de: {
    home: "Startseite",
    courses: "Kurse",
    aboutUs: "Über uns",
    contact: "Kontakt",
    allCourses: "Alle Kurse",
    beginnerCourses: "Anfängerkurse",
    advancedCourses: "Fortgeschrittenenkurse",
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const { itemCount, setCartOpen } = useCart();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="relative z-50">
      {/* Chyron - Top Bar */}
      <div className="bg-primary-darkest text-white">
        <div className="container flex justify-between pt-4 pb-16">
          {/* Left side - Address and Email */}
          <div className="hidden md:flex items-center gap-6 pl-24">
            <a
              href="https://maps.google.com/?q=Musterstraße+123,+10115+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[16px]/[26px] hover:text-primary-light transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Musterstraße 123, 81505 München</span>
            </a>
            <a
              href="mailto:info@angelschein-kurse.de"
              className="flex items-center gap-2 text-[16px]/[26px] hover:text-primary-light transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@angelschein-kurse.de</span>
            </a>
          </div>

          {/* Right side - Language selector and Social icons */}
          <div className="flex items-center gap-4 ml-auto pr-24">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as "en" | "de")}
              className="bg-transparent border border-white/30 rounded px-2 py-1 text-sm cursor-pointer hover:border-white transition-colors"
            >
              <option value="de" className="text-black">
                Deutsch
              </option>
              <option value="en" className="text-black">
                English
              </option>
            </select>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Overlapping the chyron */}
      <div className="container relative">
        <nav className="h-[128px] absolute left-4 right-4 lg:left-8 lg:right-8 -top-12 bg-white rounded-lg shadow-lg flex items-center">
          <div className="flex-1 flex justify-between items-center h-full mx-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎣</span>
              </div>
              <span className="font-bold text-xl text-text-dark hidden sm:block">
                Angelschein
                <span className="text-primary">Kurse</span>
                </span> */}
              <Image
                src={logo.src}
                alt="Logo"
                width={282}
                height={100}
                className="w-[140px] h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:h-full items-center gap-8">
              <Link
                href="/"
                className={`h-full font-medium text-gray-800 hover:text-primary transition-colors px-2 py-3 flex items-center justify-center relative ${
                  pathname === "/" ? "text-primary" : ""
                }`}
              >
                {t.home}
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
                )}
              </Link>

              {/* Courses Dropdown */}
              <div
                className="h-full relative flex items-center"
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <button
                  className={`h-full flex items-center gap-1 font-medium text-gray-800 hover:text-primary cursor-pointer transition-colors px-2 py-3 relative ${
                    pathname.startsWith("/courses") ? "text-primary" : ""
                  }`}
                  // onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                  onClick={() => router.push("/courses")}
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                >
                  {t.courses}
                  <ChevronDown
                    className={`w-4 h-4 ${
                      coursesDropdownOpen
                        ? "rotate-180 duration-300"
                        : "rotate-0 duration-300"
                    }`}
                  />
                  {pathname.startsWith("/courses") && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
                  )}
                </button>

                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-primary-darkest  shadow-lg py-2 z-50 animate-[slide-up_0.3s_ease-out]">
                    <Link
                      href="/courses"
                      className="block px-4 py-2 text-white  hover:text-primary-300 transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      {t.allCourses}
                    </Link>
                    <Link
                      href="/courses?level=beginner"
                      className="block px-4 py-2 text-white hover:text-primary-300 transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      {t.beginnerCourses}
                    </Link>
                    <Link
                      href="/courses?level=advanced"
                      className="block px-4 py-2 text-white hover:text-primary-300 transition-colors"
                      onClick={() => setCoursesDropdownOpen(false)}
                    >
                      {t.advancedCourses}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`h-full font-medium text-gray-800 hover:text-primary transition-colors px-2 py-3 flex items-center justify-center relative ${
                  pathname === "/about" ? "text-primary" : ""
                }`}
              >
                {t.aboutUs}
                {pathname === "/about" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
                )}
              </Link>
              <Link
                href="/contact"
                className={`h-full font-medium text-gray-800 hover:text-primary transition-colors px-2 py-3 flex items-center justify-center relative ${
                  pathname === "/contact" ? "text-primary" : ""
                }`}
              >
                {t.contact}
                {pathname === "/contact" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
                )}
              </Link>
            </div>

            {/* Right side - Phone and Cart */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+4930123456789"
                className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
              >
                <div
                  className={
                    "w-13 h-13 bg-primary-100 flex items-center justify-center rounded-full group-hover:bg-primary-200 transition-colors"
                  }
                >
                  <Phone className="w-5 h-5  " />
                </div>
                <span>+49 30 123 456 789</span>
              </a>

              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-primary-50 rounded-full transition-colors"
              >
                <div
                  className={
                    "w-13 h-13 bg-primary-100 flex items-center justify-center rounded-full hover:bg-primary-200 transition-colors"
                  }
                >
                  <ShoppingCart className="w-6 h-6 text-primary" />
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
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 px-6">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="font-medium text-text-dark hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.home}
                </Link>
                <Link
                  href="/courses"
                  className="font-medium text-text-dark hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.courses}
                </Link>
                <Link
                  href="/about"
                  className="font-medium text-text-dark hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.aboutUs}
                </Link>
                <Link
                  href="/contact"
                  className="font-medium text-text-dark hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.contact}
                </Link>
                <a
                  href="tel:+4930123456789"
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>+49 30 123 456 789</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Spacer for the overlapping navigation */}
      {/* <div className="h-16"></div> */}
    </header>
  );
}
