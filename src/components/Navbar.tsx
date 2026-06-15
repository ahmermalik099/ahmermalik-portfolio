"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "tools", "skills", "work", "certifications", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) => active === href.substring(1);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface/80 px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
          className="group relative grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
          aria-label="Home"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover:[transform:rotate(180deg)]" />
          <span className="absolute inset-[2px] grid place-items-center rounded-full bg-bg">
            <span className="font-display text-[13px] italic text-text-primary">AM</span>
          </span>
        </a>

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Nav links */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => go(link.href)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                isActive(link.href)
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Say hi */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            go("#contact");
          }}
          className="group relative rounded-full"
        >
          <span
            className="gradient-ring absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ inset: "-2px" }}
          />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-text-primary backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            Say hi <span className="text-[0.85em]">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}
