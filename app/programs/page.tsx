import type { Metadata } from "next";
import { programs } from "@/lib/programs";
import ProgramCard from "@/components/ProgramCard";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Three learning tracks — Fabric Fundamentals, Power BI for Analysts, and Data Career Launchpad — to take you from beginner to job-ready.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D4F47] pt-32 pb-20 lg:pt-40 lg:pb-24" aria-label="Programs header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
              Our curriculum
            </p>
            <h1
              className="text-5xl lg:text-6xl text-[#FAF6EF] leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Three tracks.
              <br />
              Every level.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              From your first Lakehouse to a production-grade analytics
              engineering portfolio — our programs meet you exactly where you
              are and take you where you want to go.
            </p>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-[#0D4F47]" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-10 block">
          <path d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 32C1200 28 1320 20 1380 16L1440 12V60H0Z" fill="#FAF6EF" />
        </svg>
      </div>

      {/* Program overview strip */}
      <section className="bg-[#FAF6EF] py-12" aria-label="Program overview">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {programs.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-[#0D4F47] hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D4F47]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0D4F47] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-[#0D4F47] group-hover:text-white transition-colors" aria-hidden="true">
                    <path d="M3 9L9 3L15 9L9 15L3 9Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0D4F47]">{p.name}</p>
                  <p className="text-xs text-stone-400">{p.level} · {p.duration}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program cards */}
      <section className="bg-[#FAF6EF] py-8 pb-24" aria-label="Program details">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility note */}
      <section className="bg-[#0D4F47]/5 border-t border-stone-200 py-16" aria-labelledby="eligibility-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            id="eligibility-heading"
            className="text-3xl text-[#0D4F47] mb-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            All programs are 100% free
          </h2>
          <p className="text-stone-600 leading-relaxed mb-2">
            HyperEducation programs are funded by corporate sponsors and individual donors. There is
            no cost to you — including course materials, mentor access, and certification exam vouchers.
          </p>
          <p className="text-stone-500 text-sm">
            Eligibility criteria apply. We prioritise applicants from low-income households, care leavers,
            refugees, and long-term unemployed individuals.
          </p>
        </div>
      </section>
    </>
  );
}
