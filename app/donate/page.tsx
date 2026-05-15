import type { Metadata } from "next";
import DonationTier from "@/components/DonationTier";
import ImpactBar from "@/components/ImpactBar";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support HyperEducation with a monthly gift. Sponsor a student, fund a cohort, or become a corporate partner to help us expand access to data careers.",
};

const tiers = [
  {
    id: "student-sponsor",
    name: "Student Sponsor",
    price: "$50",
    period: "/month",
    tagline: "Make one student's journey possible",
    impact:
      "Covers one student's entire 10-week Power BI course including course materials, mentor sessions, and the PL-300 certification exam voucher.",
    features: [
      "Named recognition in our annual impact report",
      "Monthly update on your sponsored cohort",
      "Invitation to virtual graduation ceremony",
      "Tax receipt for all donations",
    ],
    highlighted: false,
    cta: "Sponsor a student",
  },
  {
    id: "cohort-sponsor",
    name: "Cohort Sponsor",
    price: "$500",
    period: "/month",
    tagline: "Power an entire learning cohort",
    impact:
      "Funds all 25 students in a cohort for one month — covering instructor salaries, course infrastructure, mentorship coordination, and exam support.",
    features: [
      "Logo and profile in our cohort launch announcement",
      "Meet-the-cohort virtual session with your team",
      "Quarterly impact reports with graduate outcomes",
      "Priority access to HyperEducation graduate talent pool",
      "Social media recognition",
      "Tax receipt for all donations",
    ],
    highlighted: true,
    cta: "Sponsor a cohort",
  },
  {
    id: "corporate-partner",
    name: "Corporate Partner",
    price: "Custom",
    period: "custom",
    tagline: "Build a pipeline of diverse data talent",
    impact:
      "Fully bespoke partnership — co-design curriculum, offer apprenticeships, host capstone projects, and directly recruit from our talent pipeline.",
    features: [
      "Custom curriculum input & industry project integration",
      "Exclusive graduate talent pipeline access",
      "Co-branded marketing & PR opportunities",
      "Annual impact day with your data team",
      "Named founding partner status (available to first 5 partners)",
      "ESG reporting data and impact metrics",
    ],
    highlighted: false,
    cta: "Get in touch",
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D4F47] pt-32 pb-20 lg:pt-40 lg:pb-24" aria-label="Donate header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
              Make a difference
            </p>
            <h1
              className="text-5xl lg:text-6xl text-[#FAF6EF] leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Invest in potential,
              <br />
              not privilege.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Every pound we raise goes directly to student support, instructor
              pay, and certification costs. No middlemen. No overhead waste. Just
              lives changed through data skills.
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

      {/* Impact bar */}
      <ImpactBar />

      {/* Tiers */}
      <section className="bg-[#FAF6EF] py-20 pb-28" aria-labelledby="tiers-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-3">
              Giving tiers
            </p>
            <h2
              id="tiers-heading"
              className="text-4xl lg:text-5xl text-[#0D4F47] mb-4"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Choose your impact
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              All tiers are monthly recurring. You can pause or cancel at any
              time. One-off donations are also accepted — just get in touch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => (
              <DonationTier key={tier.id} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Transparency section */}
      <section className="bg-white border-t border-stone-200 py-16" aria-labelledby="transparency-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2
            id="transparency-heading"
            className="text-3xl text-[#0D4F47] mb-8 text-center"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Where your money goes
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { pct: "74%", label: "Direct student costs", desc: "Materials, exam vouchers, tech access grants, and stipends" },
              { pct: "18%", label: "Instructor & mentor pay", desc: "Fair wages for experienced data professionals who teach" },
              { pct: "8%", label: "Operations", desc: "Platform, admin, safeguarding, and legal compliance" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 rounded-2xl bg-[#FAF6EF] border border-stone-200">
                <p
                  className="text-5xl font-bold text-[#E8890C] mb-2"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  {item.pct}
                </p>
                <p className="font-semibold text-[#0D4F47] text-sm mb-1">{item.label}</p>
                <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 mt-6">
            Independently audited financial statements available on request. Charity registration: 1234567.
          </p>
        </div>
      </section>
    </>
  );
}
