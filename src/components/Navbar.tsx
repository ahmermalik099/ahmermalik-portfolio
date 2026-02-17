"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", icon: "fas fa-home" },
  { name: "About", href: "#about", icon: "fas fa-user" },
  { name: "Skills", href: "#skills", icon: "fas fa-code" },
  { name: "Experience", href: "#experience", icon: "fas fa-briefcase" },
  { name: "Projects", href: "#projects", icon: "fas fa-folder-open" },
  { name: "Certifications", href: "#certifications", icon: "fas fa-certificate" },
  { name: "Contact", href: "#contact", icon: "fas fa-envelope" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold hidden sm:block">
            <span className="text-white">Ahmer</span>
            <span className="gradient-text">.dev</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.href.substring(1)
                  ? "text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-[#00D4FF]/20 rounded-lg border border-[#0066FF]/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Contact Button - Desktop */}
        <motion.a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#contact");
          }}
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-xl text-white text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
          style={{ padding: "12px 28px" }}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <i className="fas fa-paper-plane text-xs" />
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden relative w-10 h-10 rounded-xl bg-[#111] border border-[rgba(255,255,255,0.08)] flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0,
              width: isMobileMenuOpen ? 20 : 18,
            }}
            className="h-0.5 bg-white block rounded-full"
            style={{ width: 18 }}
          />
          <motion.span
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
              width: isMobileMenuOpen ? 0 : 14,
            }}
            className="h-0.5 bg-white block rounded-full"
            style={{ width: 14 }}
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0,
              width: isMobileMenuOpen ? 20 : 10,
            }}
            className="h-0.5 bg-white block rounded-full"
            style={{ width: 10 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-[rgba(255,255,255,0.05)] overflow-hidden"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === link.href.substring(1)
                      ? "bg-gradient-to-r from-[#0066FF]/20 to-[#00D4FF]/20 text-white border border-[#0066FF]/30"
                      : "text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <i className={`${link.icon} w-5 text-center ${
                    activeSection === link.href.substring(1) ? "text-[#00D4FF]" : ""
                  }`} />
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}

              {/* Mobile Contact Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-xl text-white font-semibold"
              >
                <i className="fas fa-paper-plane" />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
