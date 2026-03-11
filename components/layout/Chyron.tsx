"use client";

import { useState } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Chyron() {
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
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
  );
}

