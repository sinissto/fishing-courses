"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  FaCartArrowDown,
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

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
  const [isClosingMobileMenu, setIsClosingMobileMenu] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesDropdownOpen, setMobileCoursesDropdownOpen] =
    useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { itemCount, setCartOpen } = useCart();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const router = useRouter();
  const pathname = usePathname();

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
      <div className="bg-primary-darkest text-white">
        <div className="container flex justify-center md:justify-between pt-4 pb-16">
          {/* Left side - Address and Email */}
          <div className="hidden md:flex items-center gap-6 lg:pl-24">
            <a
              href="https://maps.google.com/?q=Musterstraße+123,+10115+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px]/[24px] lg:text-[16px]/[26px] hover:text-primary-light transition-colors"
            >
              <FaMapMarkerAlt className="w-4 h-4" />
              <span>Musterstraße 123, 81505 München</span>
            </a>
            <a
              href="mailto:info@angelschein-kurse.de"
              className="flex items-center gap-2 text-[14px]/[24px] lg:text-[16px]/[26px] hover:text-primary-light transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>info@angelschein-kurse.de</span>
            </a>
          </div>

          {/* Right side - Language selector and Social icons */}
          <div className="flex items-center justify-center  gap-4 lg:ml-auto pr-0 lg:pr-24">
            {/* Language Selector */}
            {/*<select*/}
            {/*  value={language}*/}
            {/*  onChange={(e) => setLanguage(e.target.value as "en" | "de")}*/}
            {/*  className="bg-transparent border border-white/30 rounded px-2 py-1 text-sm cursor-pointer hover:border-white transition-colors"*/}
            {/*>*/}
            {/*  <option value="de" className="text-black">*/}
            {/*    Deutsch*/}
            {/*  </option>*/}
            {/*  <option value="en" className="text-black">*/}
            {/*    English*/}
            {/*  </option>*/}
            {/*</select>*/}

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="bg-transparent border border-white/30 rounded px-2 py-1 text-sm cursor-pointer hover:border-white transition-colors flex items-center gap-1"
              >
                {language === "de" ? "Deutsch" : "English"}
                <FaChevronDown
                  className={`w-3 h-3 ${
                    langOpen ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>

              {langOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-primary-darkest text-white shadow-lg rounded py-1 min-w-full z-50"
                  onMouseLeave={() => setLangOpen(false)}
                >
                  <button
                    onClick={() => {
                      setLanguage("de");
                      setLangOpen(false);
                    }}
                    className="block w-full text-left px-3 py-1.5 text-sm text-white hover:text-primary-300 cursor-pointer"
                  >
                    Deutsch
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLangOpen(false);
                    }}
                    className="block w-full text-left px-3 py-1.5 text-sm text-white hover:text-primary-300 cursor-pointer"
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Overlapping the chyron */}
      <div className="container relative">
        <nav className="h-[96px] lg:h-[128px] absolute left-4 right-4 lg:left-8 lg:right-8 -top-12 bg-white rounded-lg shadow-lg flex items-center">
          <div className="flex-1 flex justify-between items-center gap-6 h-full mx-4 lg:mx-6 xl:mx-20">
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
                className="w-[90px] lg:w-[140px] h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:h-full items-center gap-8">
              <Link
                href="/"
                className={`h-full w-[96px] font-medium text-gray-800 hover:text-primary transition-colors  flex items-center justify-center relative  ${
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
                className="h-full w-[96px] relative flex items-center "
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <button
                  className={`h-full w-full flex items-center justify-center gap-1 font-medium text-gray-800 hover:text-primary cursor-pointer transition-colors relative ${
                    pathname.startsWith("/courses") ? "text-primary" : ""
                  }`}
                  // onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                  onClick={() => router.push("/courses")}
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                >
                  {t.courses}
                  <FaChevronDown
                    className={`w-4 h-4 ${
                      coursesDropdownOpen
                        ? "rotate-180 duration-300"
                        : "rotate-0 duration-300"
                    }`}
                  />
                </button>
                {pathname.startsWith("/courses") && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
                )}

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
                className={`h-full w-[96px] font-medium text-gray-800 hover:text-primary transition-colors flex items-center justify-center relative  ${
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
                className={`h-full w-[96px] font-medium text-gray-800 hover:text-primary transition-colors flex items-center justify-center relative ${
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
                    "w-10 h-10 xl:w-13 xl:h-13 bg-primary-100 flex items-center justify-center rounded-full group-hover:bg-primary-200 transition-colors"
                  }
                >
                  <FaPhoneAlt className="w-5 h-5  " />
                </div>
                <span className={"text-[14px]/[24px] xl:text-[16px]/[26px] "}>
                  +49 30 123 456 789
                </span>
              </a>

              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-primary-50 rounded-full transition-colors group cursor-pointer"
              >
                <div
                  className={
                    "w-10 h-10 xl:w-13 xl:h-13 bg-primary-100 flex items-center justify-center rounded-full group-hover:text-primary-dark transition-colors"
                  }
                >
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
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 z-50 lg:hidden ${
              isClosingMobileMenu
                ? "animate-[slide-right_0.3s_ease-out_forwards]"
                : "animate-[slide-left_0.3s_ease-out]"
            }`}
            onClick={handleCloseMobileMenu}
          />

          {/* Drawer */}
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col lg:hidden ${
              isClosingMobileMenu
                ? "animate-[slide-right_0.3s_ease-out_forwards]"
                : "animate-[slide-left_0.3s_ease-out]"
            }`}
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
                onClick={handleCloseMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className={`font-medium text-lg py-2 border-b border-gray-100 transition-colors ${
                    pathname === "/"
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }`}
                  onClick={handleCloseMobileMenu}
                >
                  {t.home}
                </Link>

                {/* Courses with dropdown */}
                <div className="border-b border-gray-100">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href="/courses"
                      className={`font-medium text-lg transition-colors ${
                        pathname.startsWith("/courses")
                          ? "text-primary"
                          : "text-gray-800 hover:text-primary"
                      }`}
                      onClick={handleCloseMobileMenu}
                    >
                      {t.courses}
                    </Link>
                    <button
                      onClick={() =>
                        setMobileCoursesDropdownOpen(!mobileCoursesDropdownOpen)
                      }
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <FaChevronDown
                        className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                          mobileCoursesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Submenu */}
                  {mobileCoursesDropdownOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-2 animate-[fade-in_0.2s_ease-out]">
                      <Link
                        href="/courses"
                        className="text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t.allCourses}
                      </Link>
                      <Link
                        href="/courses?level=beginner"
                        className="text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t.beginnerCourses}
                      </Link>
                      <Link
                        href="/courses?level=advanced"
                        className="text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={handleCloseMobileMenu}
                      >
                        {t.advancedCourses}
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className={`font-medium text-lg py-2 border-b border-gray-100 transition-colors ${
                    pathname === "/about"
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }`}
                  onClick={handleCloseMobileMenu}
                >
                  {t.aboutUs}
                </Link>
                <Link
                  href="/contact"
                  className={`font-medium text-lg py-2 border-b border-gray-100 transition-colors ${
                    pathname === "/contact"
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  }`}
                  onClick={handleCloseMobileMenu}
                >
                  {t.contact}
                </Link>
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
      )}

      {/* Spacer for the overlapping navigation */}
      {/* <div className="h-16"></div> */}
    </header>
  );
}
