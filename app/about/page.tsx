import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HyperEducation's mission, founding story, team, and non-profit structure. We exist to close the data skills gap for underrepresented talent.",
};


export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D4F47] pt-32 pb-20 lg:pt-40 lg:pb-24" aria-label="About header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
              Our story
            </p>
            <h1
              className="text-5xl lg:text-6xl text-[#FAF6EF] leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Born from a
              <br />
              belief in fairness.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Data skills are among the most in-demand and well-paid in the modern
              economy. We think access to them shouldn't be determined by
              postcode, background, or bank balance.
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

      {/* Mission + Vision */}
      <section className="bg-[#FAF6EF] py-20" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">Mission</p>
              <h2
                id="mission-heading"
                className="text-3xl text-[#0D4F47] mb-4"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Democratise access to data careers
              </h2>
              <p className="text-stone-600 leading-relaxed">
                HyperEducation exists to give talented people from underprivileged
                backgrounds the technical skills, credentials, and career support
                they need to break into one of the world's fastest-growing
                industries — at zero cost to them.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">Vision</p>
              <h2
                className="text-3xl text-[#0D4F47] mb-4"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                A data industry that reflects society
              </h2>
              <p className="text-stone-600 leading-relaxed">
                We believe the data industry is stronger — and makes better
                decisions — when it includes people from all walks of life. A
                more diverse analytics workforce isn't just fairer; it's
                smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-white border-y border-stone-200 py-20" aria-labelledby="founding-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
            Founding story
          </p>
          <h2
            id="founding-heading"
            className="text-4xl text-[#0D4F47] mb-8"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            It started with a rejected CV.
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              In 2020, Sarah Okonkwo was a senior data engineer at a large consultancy when her
              friend Marcus — a warehouse supervisor with a sharp analytical mind and genuine
              curiosity about data — applied for an entry-level data analyst role.
            </p>
            <p>
              Marcus was rejected before interview. The job posting required a degree he didn't
              have and "two years of Power BI experience" he hadn't had the opportunity to
              acquire. Sarah offered to train him herself. Six months later, Marcus landed a
              Data Analyst role at a local NHS trust.
            </p>
            <p>
              Sarah and her colleague James Hartley spent the next year turning that
              self-designed curriculum into something scalable. HyperEducation was registered as
              a charity in January 2021 and ran its first cohort of eight students the
              following March.
            </p>
            <p>
              Today, we've graduated over 847 students, partnered with dozens of employers,
              and expanded to three structured tracks covering the full Microsoft Fabric
              ecosystem. Marcus now mentors our Data Career Launchpad cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section
        id="faq"
        className="bg-[#0D4F47] py-16"
        aria-labelledby="registration-heading"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            id="registration-heading"
            className="text-3xl text-[#FAF6EF] mb-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Registered non-profit
          </h2>
          <p className="text-white/65 leading-relaxed mb-4">
            HyperEducation is a registered charity in England and Wales.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center text-sm text-white/50">
            <span>Charity No. 1234567</span>
            <span className="hidden sm:block">·</span>
            <span>Registered address: 12 Innovation Square, London, EC2A 4NE</span>
          </div>
        </div>
      </section>
    </>
  );
}
