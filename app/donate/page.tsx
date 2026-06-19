import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support our mission",
  description:
    "HyperEducation is pre-launch and not yet registered as a charity. We are not currently accepting donations. Register your interest to be contacted once charity registration is complete.",
};

export default function DonatePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D4F47] pt-32 pb-20 lg:pt-40 lg:pb-24" aria-label="Donate header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
              Support our mission
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
              We are pre-launch and not currently accepting donations. Once our
              charity registration with the Charity Commission for England and
              Wales is complete, we will publish full giving options here.
              In the meantime, you can register your interest below.
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

      {/* Status notice */}
      <section className="bg-[#FAF6EF] py-16" aria-labelledby="status-heading">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div
            role="note"
            className="rounded-2xl border border-amber-300 bg-amber-50 px-6 py-6 text-sm text-amber-900"
          >
            <h2
              id="status-heading"
              className="font-bold text-base mb-2"
            >
              Donations are not currently being accepted
            </h2>
            <p className="leading-relaxed mb-2">
              HyperEducation has not yet completed charity registration in
              England and Wales. Until that registration is in place we are
              not soliciting donations, cannot issue tax receipts, and have
              no payment processor connected.
            </p>
            <p className="leading-relaxed">
              If you would like to be notified when giving opens, please use
              the interest form below. We will not contact you for any other
              purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Interest form (no payment) */}
      <section className="bg-[#FAF6EF] pb-20" aria-labelledby="interest-heading">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <h2
              id="interest-heading"
              className="text-3xl text-[#0D4F47] mb-2"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Register your interest
            </h2>
            <p className="text-sm text-stone-500 mb-8">
              We will email you once when donations open. No marketing, no
              third-party sharing, and you can unsubscribe at any time.
            </p>
            <p className="text-sm text-stone-700">
              Please email{" "}
              <a
                href="mailto:hello@hypereducation.org"
                className="text-[#0D4F47] font-semibold underline"
              >
                hello@hypereducation.org
              </a>{" "}
              with the subject line &ldquo;Donation interest&rdquo;. We will
              add a proper form once charity registration is in place and a
              compliant payment processor is connected.
            </p>
            <p className="text-xs text-stone-400 mt-6">
              By emailing us you consent to us storing your email address for
              the sole purpose of notifying you when donations open. See our{" "}
              <a href="/privacy" className="underline">privacy policy</a> for
              details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
