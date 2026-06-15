"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = ["Flutter", "Mobile", "Creative", "Problem-Solving"];

/* ------------------------------------------------------------------ */
/* A simple, clean code-editor screen                                  */
/* ------------------------------------------------------------------ */
const codeLines = [
  [{ w: "w-10", c: "#89AACC" }, { w: "w-16", c: "#E0556B" }, { w: "w-8", c: "#7FB069" }],
  [{ w: "w-6", c: "#FFB86B" }, { w: "w-24", c: "#cfcfcf" }],
  [{ w: "w-12", c: "#89AACC" }, { w: "w-10", c: "#FFB86B" }, { w: "w-20", c: "#7FB069" }],
  [{ w: "w-20", c: "#cfcfcf" }],
  [{ w: "w-8", c: "#E0556B" }, { w: "w-14", c: "#89AACC" }],
  [{ w: "w-16", c: "#7FB069" }, { w: "w-10", c: "#cfcfcf" }, { w: "w-6", c: "#FFB86B" }],
  [{ w: "w-12", c: "#89AACC" }, { w: "w-24", c: "#cfcfcf" }],
];

function SystemMock() {
  return (
    <div className="w-full overflow-hidden bg-surface">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-stroke bg-bg/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-text-primary/70">main.dart</span>
      </div>

      {/* Editor body */}
      <div className="flex p-4 md:p-5">
        {/* Line numbers */}
        <div className="mr-4 flex flex-col items-end gap-2.5 text-[10px] text-muted/50">
          {codeLines.map((_, i) => (
            <span key={i} className="leading-none">{i + 1}</span>
          ))}
        </div>

        {/* Code lines */}
        <div className="flex flex-1 flex-col gap-2.5">
          {codeLines.map((line, i) => (
            <div key={i} className="flex items-center gap-1.5" style={{ paddingLeft: `${(i % 3) * 14}px` }}>
              {line.map((tok, j) => (
                <span
                  key={j}
                  className={`${tok.w} h-2 rounded-full`}
                  style={{ background: tok.c, opacity: 0.85 }}
                />
              ))}
              {i === codeLines.length - 1 && (
                <span className="ml-0.5 h-3.5 w-[2px] animate-pulse bg-text-primary/70" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Keyboard built from key rows                                        */
/* ------------------------------------------------------------------ */
function Keyboard() {
  const rows = [14, 14, 13, 12];
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0d0d0d] p-2 shadow-lg shadow-black/50">
      <div className="space-y-1.5">
        {rows.map((count, r) => (
          <div key={r} className="flex justify-center gap-1.5">
            {Array.from({ length: count }).map((_, k) => (
              <span key={k} className="h-3.5 w-3.5 rounded-[3px] bg-white/10 md:h-4 md:w-4" />
            ))}
          </div>
        ))}
        {/* spacebar row */}
        <div className="flex justify-center gap-1.5">
          <span className="h-3.5 w-3.5 rounded-[3px] bg-white/10 md:h-4 md:w-4" />
          <span className="h-3.5 w-32 rounded-[3px] bg-white/10 md:h-4" />
          <span className="h-3.5 w-3.5 rounded-[3px] bg-white/10 md:h-4 md:w-4" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The whole workspace: monitor + keyboard + mat + props               */
/* ------------------------------------------------------------------ */
function DeskScene() {
  return (
    <div className="relative w-[min(96vw,1120px)]">
      {/* Monitor */}
      <div className="relative z-20 mx-auto w-[86%]">
        <div className="rounded-2xl border border-white/12 bg-[#070707] p-2.5 shadow-2xl shadow-black/70">
          <div className="overflow-hidden rounded-xl ring-1 ring-white/5">
            <SystemMock />
          </div>
        </div>
        {/* stand */}
        <div className="mx-auto h-9 w-9 bg-gradient-to-b from-white/12 to-white/[0.04]" />
        <div className="mx-auto h-2.5 w-44 rounded-full bg-white/10 shadow-md shadow-black/40" />
      </div>

      {/* Desk surface with keyboard, mat, mouse (tilted flat) */}
      <div className="relative z-10 mt-3 [perspective:1400px]">
        <div className="origin-top [transform:rotateX(52deg)]">
          {/* Mat */}
          <div className="mx-auto w-[78%] rounded-[18px] border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-center gap-5">
              <div className="w-[72%]">
                <Keyboard />
              </div>
              {/* Mouse */}
              <div className="h-12 w-7 rounded-[14px] border border-white/10 bg-gradient-to-b from-[#161616] to-[#0d0d0d] shadow-lg shadow-black/50">
                <div className="mx-auto mt-1.5 h-3 w-[2px] rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Props */}
      {/* Coffee mug */}
      <div className="absolute -left-1 top-[34%] z-20 hidden sm:block">
        <div className="relative h-12 w-11 rounded-b-xl rounded-t-md border border-white/12 bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e]">
          <div className="absolute -right-2.5 top-2 h-5 w-4 rounded-r-full border border-white/12" />
          <div className="absolute left-1.5 right-1.5 top-1 h-1.5 rounded-full bg-white/10" />
          <div className="absolute left-1/2 top-[-10px] h-3 w-[2px] -translate-x-1/2 rounded-full bg-white/10" />
        </div>
      </div>
      {/* Plant */}
      <div className="absolute -right-1 top-[28%] z-20 hidden sm:block">
        <div className="relative flex flex-col items-center">
          <div className="flex items-end gap-0.5">
            <span className="h-6 w-2 rotate-[-18deg] rounded-full bg-gradient-to-t from-[#3a5a45] to-[#5d8a6a]" />
            <span className="h-8 w-2 rounded-full bg-gradient-to-t from-[#3a5a45] to-[#6fa07e]" />
            <span className="h-6 w-2 rotate-[18deg] rounded-full bg-gradient-to-t from-[#3a5a45] to-[#5d8a6a]" />
          </div>
          <div className="h-7 w-9 rounded-b-lg rounded-t-sm border border-white/12 bg-gradient-to-b from-[#2a2a2a] to-[#141414]" />
        </div>
      </div>
      {/* Phone */}
      <div className="absolute bottom-[6%] right-[10%] z-20 hidden md:block">
        <div className="h-20 w-11 rounded-[12px] border border-white/12 bg-[#070707] p-1 shadow-lg shadow-black/50">
          <div className="h-full w-full rounded-[8px] bg-gradient-to-br from-[#4E85BF]/30 to-[#89AACC]/10" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Zoom the whole desk, focusing on the monitor screen
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1.08, 3.4]);
  const dimOpacity = useTransform(scrollYProgress, [0, 0.4], [0.34, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -90]);
  const darkenOpacity = useTransform(scrollYProgress, [0.72, 1], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".name-reveal", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, stickyRef);
    return () => ctx.revert();
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={sectionRef} className="relative h-[280vh]">
      <div ref={stickyRef} className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-bg" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E85BF]/10 blur-[150px]" />

        {/* The workspace (zooms into the screen) */}
        <motion.div
          style={{ scale: sceneScale, transformOrigin: "50% 28%" }}
          className="absolute z-10 flex items-center justify-center will-change-transform"
        >
          <DeskScene />
        </motion.div>
        <motion.div style={{ opacity: dimOpacity }} className="pointer-events-none absolute inset-0 z-10 bg-bg" />

        {/* Fades */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-bg to-transparent" />
        <motion.div style={{ opacity: darkenOpacity }} className="pointer-events-none absolute inset-0 z-20 bg-bg" />

        {/* Soft scrim so text stays readable over the brighter scene */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="pointer-events-none absolute inset-0 z-20"
        >
          <div className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(10,10,10,0.85)_0%,rgba(10,10,10,0.55)_35%,transparent_60%)]" />
        </motion.div>

        {/* Hero text */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-30 flex flex-col items-center px-6 text-center"
        >
          <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted opacity-0">Collection &apos;26</p>

          <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary opacity-0 md:text-8xl lg:text-9xl">
            Ahmer Malik
          </h1>

          <p className="blur-in mb-6 text-lg text-text-primary/90 opacity-0 md:text-xl">
            A{" "}
            <span key={roleIndex} className="inline-block animate-role-fade-in font-display italic text-text-primary">
              {roles[roleIndex]}
            </span>{" "}
            developer.
          </p>

          <p className="blur-in mb-12 max-w-md text-sm text-muted opacity-0 md:text-base">
            Designing seamless cross-platform mobile experiences by focusing on the unique nuances which bring systems to life.
          </p>

          <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4 opacity-0">
            <button onClick={() => go("#work")} className="group relative rounded-full transition-transform duration-300 hover:scale-105">
              <span className="gradient-ring absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: "-2px" }} />
              <span className="relative block rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
                See Works
              </span>
            </button>

            <button onClick={() => go("#contact")} className="group relative rounded-full transition-transform duration-300 hover:scale-105">
              <span className="gradient-ring absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: "-2px" }} />
              <span className="relative block rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
                Reach out…
              </span>
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div style={{ opacity: hintOpacity }} className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
          <div className="relative h-10 w-px overflow-hidden bg-stroke">
            <div className="accent-gradient absolute inset-x-0 h-1/2 animate-scroll-down" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
