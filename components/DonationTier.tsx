"use client";

import { motion } from "framer-motion";

export interface DonationTierProps {
  id: string;
  name: string;
  price: string;
  period?: string;
  tagline: string;
  impact: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
}

export default function DonationTier({
  id,
  name,
  price,
  period = "/month",
  tagline,
  impact,
  features,
  highlighted = false,
  cta = "Donate now",
}: DonationTierProps) {
  const handleDonate = () => {
    // Stripe stub — replace with real Stripe checkout session
    console.log(`[Stripe stub] Initiating checkout for tier: ${id}`);
    alert(`Thank you for your interest in the "${name}" tier! Stripe checkout integration coming soon.`);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative rounded-2xl p-8 flex flex-col gap-5 ${
        highlighted
          ? "bg-[#0D4F47] text-[#FAF6EF] shadow-xl shadow-teal-900/30"
          : "bg-white border border-stone-200/80 shadow-sm"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 bg-[#E8890C] text-white text-xs font-bold tracking-widest uppercase rounded-full">
            Most popular
          </span>
        </div>
      )}

      {/* Header */}
      <div>
        <p
          className={`text-xs font-bold tracking-widest uppercase mb-2 ${
            highlighted ? "text-[#E8890C]" : "text-[#E8890C]"
          }`}
        >
          {name}
        </p>
        <div className="flex items-end gap-1 mb-1">
          <span
            className={`text-4xl font-bold ${
              highlighted ? "text-[#FAF6EF]" : "text-[#0D4F47]"
            }`}
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            {price}
          </span>
          {period !== "custom" && (
            <span
              className={`text-sm mb-1 ${
                highlighted ? "text-white/60" : "text-stone-400"
              }`}
            >
              {period}
            </span>
          )}
        </div>
        <p className={`text-sm ${highlighted ? "text-white/70" : "text-stone-500"}`}>
          {tagline}
        </p>
      </div>

      {/* Impact statement */}
      <div
        className={`rounded-xl px-4 py-3 text-sm font-medium ${
          highlighted
            ? "bg-white/10 text-[#FAF6EF]"
            : "bg-[#FAF6EF] border border-stone-200 text-stone-800"
        }`}
      >
        <span className={`text-xs font-bold uppercase tracking-wide block mb-1 ${highlighted ? "text-[#E8890C]" : "text-[#E8890C]"}`}>
          What your gift funds
        </span>
        {impact}
      </div>

      {/* Features */}
      <ul className="space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center ${
                highlighted ? "bg-[#E8890C]/20" : "bg-[#0D4F47]/10"
              }`}
              aria-hidden="true"
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path
                  d="M1.5 4L3.5 6L6.5 2"
                  stroke={highlighted ? "#E8890C" : "#0D4F47"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={highlighted ? "text-white/80" : "text-stone-700"}>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        id={`donate-${id}`}
        onClick={handleDonate}
        className={`w-full px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 active:scale-95 ${
          highlighted
            ? "bg-[#E8890C] text-white hover:bg-[#edA030]"
            : "bg-[#0D4F47] text-[#FAF6EF] hover:bg-[#136058]"
        }`}
        aria-label={`${cta} for ${name} tier`}
      >
        {cta}
      </button>
    </motion.div>
  );
}
