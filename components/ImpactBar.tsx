"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

function AnimatedCounter({ end, suffix = "", prefix = "", label, description }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center px-6 py-8"
    >
      <div
        className="text-5xl lg:text-6xl font-bold text-[#E8890C] mb-2 tabular-nums"
        style={{ fontFamily: "var(--font-dm-serif)" }}
        aria-live="polite"
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-lg font-semibold text-[#0D4F47] mb-1">{label}</p>
      {description && (
        <p className="text-sm text-stone-500 max-w-[160px] mx-auto leading-snug">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface ImpactBarProps {
  variant?: "light" | "dark";
}

const stats = [
  { end: 847, suffix: "+", label: "Graduates", description: "Students who completed a track" },
  { end: 631, suffix: "+", label: "Jobs Placed", description: "Now working in data roles" },
  { end: 12400, suffix: "+", label: "Learning Hours", description: "Delivered since 2021" },
  { end: 94, suffix: "%", label: "Employment Rate", description: "Within 6 months of graduating" },
];

export default function ImpactBar({ variant = "light" }: ImpactBarProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`w-full py-4 ${
        isDark
          ? "bg-[#0D4F47]"
          : "bg-white border-y border-stone-200/60"
      }`}
      aria-label="Impact statistics"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 divide-x ${
            isDark ? "divide-white/10" : "divide-stone-200"
          }`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={isDark ? "[&_.text-5xl]:text-[#E8890C] [&_.text-lg]:text-[#FAF6EF] [&_.text-sm]:text-white/50" : ""}
            >
              <AnimatedCounter {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
