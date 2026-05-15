"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  Beginner: { bg: "#d1f2ef", text: "#0a3d37", border: "#9adfd7" },
  Intermediate: { bg: "#fce8cc", text: "#6b3700", border: "#f7d09e" },
  Advanced: { bg: "#fef5e7", text: "#7a3e00", border: "#E8890C" },
};

export interface ProgramCardProps {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  tagline: string;
  modules: string[];
  certification: string;
  cta?: string;
}

export default function ProgramCard({
  id,
  name,
  level,
  duration,
  tagline,
  modules,
  certification,
  cta = "Learn more",
}: ProgramCardProps) {
  const lc = levelColors[level] ?? levelColors.Beginner;

  return (
    <motion.article
      id={id}
      whileHover={{ y: -6, boxShadow: "0 16px 40px 0 rgba(13,79,71,0.14)" }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="bg-white rounded-2xl border border-stone-200/80 p-8 flex flex-col gap-5 cursor-default"
      style={{ boxShadow: "0 2px 16px 0 rgba(13,79,71,0.06)" }}
    >
      {/* Level badge + duration */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide border"
          style={{
            backgroundColor: lc.bg,
            color: lc.text,
            borderColor: lc.border,
          }}
        >
          {level}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {duration}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3
          className="text-2xl text-[#0D4F47] leading-tight mb-2"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          {name}
        </h3>
        <p className="text-sm text-stone-500 leading-relaxed">{tagline}</p>
      </div>

      {/* Modules */}
      <div>
        <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-3">
          Modules covered
        </p>
        <ul className="space-y-1.5" aria-label={`${name} modules`}>
          {modules.map((mod) => (
            <li key={mod} className="flex items-start gap-2 text-sm text-stone-700">
              <span
                className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-[#0D4F47]/10 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4L3.5 6L6.5 2"
                    stroke="#0D4F47"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {mod}
            </li>
          ))}
        </ul>
      </div>

      {/* Certification */}
      <div className="bg-[#FAF6EF] border border-stone-200/80 rounded-xl px-4 py-3 flex items-start gap-3">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
          <circle cx="10" cy="10" r="8.5" stroke="#E8890C" strokeWidth="1.5" />
          <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#E8890C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-0.5">
            Certification outcome
          </p>
          <p className="text-sm font-medium text-stone-800">{certification}</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={`/apply?track=${id}`}
        className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D4F47] text-[#FAF6EF] text-sm font-semibold rounded-xl hover:bg-[#136058] active:scale-95 transition-all duration-200 text-center"
      >
        {cta}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.article>
  );
}
