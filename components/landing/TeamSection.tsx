"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { teamMembers } from "@/data/team";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const translations = {
  en: {
    subheading: "Our Team",
    heading: "Our Fishing Expert Team",
  },
  de: {
    subheading: "Unser Team",
    heading: "Unser Angel-Experten-Team",
  },
};

export default function TeamSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <span className="subheading">{t.subheading}</span>
          <h2 className="heading">{t.heading}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  width={387}
                  height={463}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Name and Title */}
                <div className="absolute bottom-6 bg-white py-6 px-8 rounded-r-2xl group-hover:bg-primary transition-colors duration-500">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-500">
                    {language === "de" ? member.titleDe : member.title}
                  </p>
                </div>

                {/* Social Icons */}
                {/* absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 */}
                <div className="absolute top-0 right-0 lg:translate-x-full lg:group-hover:translate-x-0 lg:transition-transform lg:duration-500">
                  <div className="w-[54px] flex flex-col items-center py-4 gap-3 bg-white lg:bg-primary rounded-bl-2xl">
                    {member.facebook && (
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center text-primary lg:text-text-muted hover:text-white transition-all duration-300"
                      >
                        <FaFacebookF className="w-5 h-5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center text-primary lg:text-text-muted hover:text-white transition-all duration-300"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center text-primary lg:text-text-muted hover:text-white transition-all duration-300"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
