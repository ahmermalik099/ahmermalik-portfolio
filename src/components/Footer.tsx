"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
   { icon: "fab fa-github", url: "https://github.com/ahmermalik099", label: "GitHub" },
  { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/ahmer-malik-478836256", label: "LinkedIn" },
  // { icon: "fab fa-twitter", url: "https://twitter.com/ahmermalik", label: "Twitter" },
  { icon: "fab fa-instagram", url: "https://instagram.com/ahmer._.malik", label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(255,255,255,0.05)]">
      <div className="container mx-auto" style={{ padding: "64px 48px" }}>
        <div className="grid md:grid-cols-3" style={{ gap: "48px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="text-3xl font-bold inline-block mb-5"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">Ahmer</span>
              <span className="text-white">Malik</span>
            </motion.a>
            <p className="text-gray-400 leading-loose text-base">
              Flutter developer passionate about creating beautiful and
              functional mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <i className="fas fa-chevron-right text-xs text-[#0066FF]" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#111] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-base mt-5">
              <i className="fas fa-envelope mr-3 text-[#0066FF]" />
              ahmermalik099@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-base">
            &copy; {currentYear} Ahmer Malik. All rights reserved.
          </p>

          <p className="text-gray-500 text-base flex items-center gap-3">
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              <i className="fas fa-heart" />
            </motion.span>
            using Next.js & Framer Motion
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D4FF] flex items-center justify-center text-white"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
