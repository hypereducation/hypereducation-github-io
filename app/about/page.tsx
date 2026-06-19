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

      {/* Why we exist */}
      <section className="bg-white border-y border-stone-200 py-20" aria-labelledby="founding-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
            Why we exist
          </p>
          <h2
            id="founding-heading"
            className="text-4xl text-[#0D4F47] mb-8"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            The data skills gap is a fairness gap.
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Entry-level data analyst roles increasingly require certifications, portfolio
              projects, and experience with tools like Microsoft Fabric and Power BI —
              prerequisites that are difficult to acquire without an existing professional
              network or the means to pay for paid training.
            </p>
            <p>
              For talented people from underprivileged backgrounds — those without a
              university degree, recent immigrants, care leavers, and the long-term
              unemployed — that gap can feel impossible to cross alone.
            </p>
            <p>
              HyperEducation is being built to bridge that gap: structured technical
              training, mentorship, and career support, delivered at zero cost to learners
              who would otherwise be locked out of the data profession.
            </p>
          </div>
        </div>
      </section>

      {/* Status */}
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
            Building in public
          </h2>
          <p className="text-white/65 leading-relaxed mb-4 max-w-2xl mx-auto">
            HyperEducation is a non-profit startup founded in Pakistan, on a mission
            to help communities across the world access the data skills and careers
            they deserve. We are building in public — not yet a registered charity,
            and not currently accepting donations. We will publish our registration
            details and trustees here once that process is complete.
          </p>
        </div>
      </section>
    </>
  );
}
