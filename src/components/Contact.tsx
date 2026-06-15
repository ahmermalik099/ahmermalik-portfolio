"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import HlsVideo from "./HlsVideo";

const EMAIL = "ahmermalik099@gmail.com";

const socialLinks = [
  { icon: "fab fa-github", url: "https://github.com/ahmermalik099", label: "GitHub" },
  { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/ahmer-malik-478836256", label: "LinkedIn" },
  { icon: "fab fa-instagram", url: "https://instagram.com/ahmer._.malik", label: "Instagram" },
];

const MARQUEE = Array.from({ length: 10 }, () => "OPEN TO OPPORTUNITIES").join(" • ");

export default function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const year = 2026;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for older browsers / insecure context
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-bg pt-16 pb-8 md:pt-20 md:pb-12">
      {/* Background video (flipped vertically) */}
      <div className="absolute inset-0">
        <HlsVideo className="scale-y-[-1]" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="relative z-10 overflow-hidden py-6">
        <div className="marquee-track flex w-max whitespace-nowrap">
          <span className="font-display text-5xl italic text-text-primary/90 md:text-7xl">{MARQUEE} • </span>
          <span className="font-display text-5xl italic text-text-primary/90 md:text-7xl">{MARQUEE} • </span>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 py-20 text-center md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">Get in touch</p>
        <h2 className="mb-8 font-display text-5xl italic leading-[0.95] tracking-tight text-text-primary md:text-7xl lg:text-8xl">
          Let&apos;s work<br />together.
        </h2>

        <button
          onClick={copyEmail}
          aria-label="Copy email address"
          className="group relative rounded-full transition-transform duration-300 hover:scale-105"
        >
          <span
            className="gradient-ring absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ inset: "-2px" }}
          />
          <span className="relative flex items-center gap-2 rounded-full bg-text-primary px-8 py-4 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
            {copied ? (
              <>
                Copied! <i className="fas fa-check text-[0.85em]" />
              </>
            ) : (
              <>
                {EMAIL} <i className="far fa-copy text-[0.85em]" />
              </>
            )}
          </span>
        </button>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-stroke pt-8 md:flex-row">
          {/* Availability */}
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Available for projects
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-stroke text-muted transition-colors hover:border-white/20 hover:text-text-primary"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted">© {year} Ahmer Malik</p>
        </div>
      </div>
    </section>
  );
}
