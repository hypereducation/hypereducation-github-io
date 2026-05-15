"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImpactBar from "@/components/ImpactBar";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { programs } from "@/lib/programs";
import { stories } from "@/lib/stories";

const testimonialItems = stories.slice(0, 4).map((s) => ({
  id: s.id,
  name: s.name,
  formerSituation: s.formerSituation,
  currentRole: s.currentRole,
  employer: s.employer,
  quote: s.quote,
}));


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-[#0D4F47]"
        aria-label="Hero"
      >
        {/* Decorative background shapes */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-[#136058] rounded-full opacity-40 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#0a3d37] rounded-full opacity-60 -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 border border-white/3 rounded-full" />
          {/* Amber accent blob */}
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#E8890C] opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8890C]/15 border border-[#E8890C]/30 text-[#E8890C] text-xs font-bold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8890C] animate-pulse" />
                  Cohort 8 — Applications open
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl text-[#FAF6EF] leading-[1.05] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Data skills.{" "}
                <span className="text-[#E8890C]">Life-changing</span>{" "}
                opportunities.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-white/70 leading-relaxed mb-10 max-w-md"
              >
                HyperEducation is a non-profit that trains students from
                underprivileged backgrounds in Microsoft Fabric and Power BI —
                free of charge — to break into data careers.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link
                  href="/apply"
                  id="hero-apply-cta"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#E8890C] text-white text-base font-bold rounded-full hover:bg-[#edA030] active:scale-95 transition-all duration-200 shadow-lg shadow-amber-900/20"
                >
                  Apply now
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3.75 9H14.25M10.5 5.25L14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/donate"
                  id="hero-donate-cta"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 text-[#FAF6EF] text-base font-bold rounded-full hover:bg-white/20 border border-white/20 active:scale-95 transition-all duration-200"
                >
                  Support our mission
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Hero card stack */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:block relative"
              aria-hidden="true"
            >
              {/* Card stack */}
              <div className="relative w-full max-w-sm mx-auto">
                {/* Back card */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#E8890C]/20 rounded-2xl border border-[#E8890C]/20" />
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-white/5 rounded-2xl border border-white/10" />

                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
                    Current cohort snapshot
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: "Amara O.", track: "Power BI for Analysts", progress: 72 },
                      { label: "Daniel A.", track: "Data Career Launchpad", progress: 45 },
                      { label: "Priya R.", track: "Power BI for Analysts", progress: 88 },
                      { label: "Jordan T.", track: "Fabric Fundamentals", progress: 61 },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="font-medium text-white">{s.label}</span>
                          <span className="text-white/50 text-xs">{s.track}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full bg-[#E8890C] rounded-full"
                            style={{ width: `${s.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-[#E8890C]" style={{ fontFamily: "var(--font-dm-serif)" }}>
                          Cohort 8
                        </p>
                        <p className="text-xs text-white/50">Started March 2025</p>
                      </div>
                      <div className="flex -space-x-2">
                        {["AO", "DA", "PR", "JT", "ML"].map((init) => (
                          <div
                            key={init}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2aa898] to-[#0D4F47] border-2 border-[#0D4F47] flex items-center justify-center text-white text-[10px] font-bold"
                          >
                            {init}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 lg:h-20">
            <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FAF6EF" />
          </svg>
        </div>
      </section>

      {/* ── Impact Bar ─────────────────────────────────── */}
      <ImpactBar />

      {/* ── Programs preview ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-3">
              Learning tracks
            </p>
            <h2
              id="programs-heading"
              className="text-4xl lg:text-5xl text-[#0D4F47] mb-4"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Three paths. One destination.
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Whether you've never opened a spreadsheet or you're ready to build
              enterprise data platforms, we have a track that fits exactly where
              you are.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-[#0D4F47] font-semibold text-sm hover:text-[#E8890C] transition-colors duration-200 group"
            >
              See full program details
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-3">
                Graduate voices
              </p>
              <h2
                id="testimonials-heading"
                className="text-4xl lg:text-5xl text-[#0D4F47] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Real stories.
                <br />
                Real careers.
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Our graduates come from warehouses, factories, and care
                homes. They leave as data analysts, BI developers, and
                analytics engineers at organisations that matter.
              </p>
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0D4F47] text-[#0D4F47] font-semibold text-sm rounded-full hover:bg-[#0D4F47] hover:text-white transition-all duration-200"
              >
                Read all stories
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <TestimonialCarousel items={testimonialItems} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────── */}
      <section
        className="py-24 lg:py-32 bg-[#0D4F47] relative overflow-hidden"
        aria-label="Call to action"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8890C]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-2xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
              Join us
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-[#FAF6EF] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Ready to change
              <br />
              your story?
            </h2>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Applications for Cohort 9 are open. If you're passionate,
              committed, and from a low-income background — we want to hear
              from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/apply"
                id="bottom-apply-cta"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#E8890C] text-white text-base font-bold rounded-full hover:bg-[#edA030] active:scale-95 transition-all duration-200 shadow-lg"
              >
                Apply for free
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3.75 9H14.25M10.5 5.25L14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/donate"
                id="bottom-donate-cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-[#FAF6EF] text-base font-bold rounded-full hover:bg-white/20 active:scale-95 transition-all duration-200"
              >
                Support a student
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
