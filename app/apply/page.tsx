import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply for a free place on a HyperEducation learning track. Our 4-step application takes around 15 minutes to complete.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D4F47] pt-32 pb-20 lg:pt-40 lg:pb-24" aria-label="Apply header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
              Apply now — Cohort 9
            </p>
            <h1
              className="text-5xl lg:text-6xl text-[#FAF6EF] leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Your first step
              <br />
              starts here.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              This application takes around 15 minutes. Be honest — we're not
              looking for polished answers, we're looking for genuine
              commitment.
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

      {/* Form */}
      <section className="bg-[#FAF6EF] py-16 pb-28" aria-label="Application form">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <ApplyForm />
          </div>

          {/* Support note */}
          <p className="text-center text-sm text-stone-400 mt-8">
            Need help with your application?{" "}
            <a href="mailto:apply@hypereducation.org" className="text-[#0D4F47] font-medium hover:underline">
              Email us at apply@hypereducation.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
