"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Tool {
  name: string;
  icon: string;
  color: string;
}

// Row 1 — Languages & Frameworks
const languages: Tool[] = [
  { name: "Flutter", icon: "fas fa-mobile-screen", color: "#45D1FD" },
  { name: "Dart", icon: "fas fa-bullseye", color: "#0175C2" },
  { name: "Kotlin", icon: "fas fa-bolt", color: "#A97BFF" },
  { name: "Swift", icon: "fab fa-swift", color: "#FA7343" },
  { name: "Next.js", icon: "fas fa-forward", color: "#FFFFFF" },
  { name: "React", icon: "fab fa-react", color: "#61DAFB" },
  { name: "TypeScript", icon: "fas fa-code", color: "#3178C6" },
  { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
  { name: "Java", icon: "fab fa-java", color: "#EA2D2E" },
  { name: "Python", icon: "fab fa-python", color: "#FFD43B" },
];

// Row 2 — IDEs, Tools & Backend
const tooling: Tool[] = [
  { name: "Android Studio", icon: "fab fa-android", color: "#3DDC84" },
  { name: "VS Code", icon: "fas fa-code", color: "#3B9EFF" },
  { name: "Xcode", icon: "fab fa-apple", color: "#FFFFFF" },
  { name: "IntelliJ IDEA", icon: "fas fa-lightbulb", color: "#FE7DE0" },
  { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
  { name: "REST APIs", icon: "fas fa-server", color: "#4E85BF" },
  { name: "GraphQL", icon: "fas fa-diagram-project", color: "#E535AB" },
  { name: "SQLite", icon: "fas fa-database", color: "#5FD4C4" },
  { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
  { name: "GitHub", icon: "fab fa-github", color: "#FFFFFF" },
  { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
  { name: "Tailwind CSS", icon: "fas fa-wind", color: "#38BDF8" },
  { name: "Jira", icon: "fab fa-jira", color: "#2684FF" },
  { name: "Trello", icon: "fab fa-trello", color: "#0079BF" },
  { name: "Slack", icon: "fab fa-slack", color: "#E01E5A" },
  { name: "Monday", icon: "fas fa-calendar-check", color: "#FF3D57" },
];

function Chip({ tool }: { tool: Tool }) {
  return (
    <span className="group/chip inline-flex shrink-0 items-center gap-2.5 rounded-full border border-stroke bg-surface px-5 py-2.5 transition-colors duration-300 hover:border-white/25">
      <i className={`${tool.icon} text-base`} style={{ color: tool.color }} />
      <span className="whitespace-nowrap text-sm text-text-primary/90">{tool.name}</span>
    </span>
  );
}

function Row({ tools, className }: { tools: Tool[]; className: string }) {
  // Duplicate the set so the -50% translate loops seamlessly
  const doubled = [...tools, ...tools];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className={`${className} flex w-max gap-3 pr-3`}>
        {doubled.map((tool, i) => (
          <Chip key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".tools-row-1", { xPercent: -50, duration: 38, ease: "none", repeat: -1 });
      gsap.fromTo(
        ".tools-row-2",
        { xPercent: -50 },
        { xPercent: 0, duration: 44, ease: "none", repeat: -1 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="tools" className="overflow-hidden bg-bg py-16 md:py-20">
      <div className="mx-auto mb-8 max-w-[1200px] px-6 md:mb-10 md:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">Tools I&apos;ve worked with</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        <Row tools={languages} className="tools-row-1" />
        <Row tools={tooling} className="tools-row-2" />
      </div>
    </section>
  );
}
