"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, label: "Personal background" },
  { id: 2, label: "Eligibility" },
  { id: 3, label: "Motivation & goals" },
  { id: 4, label: "Tech access" },
];

const tracks = [
  { value: "fabric-fundamentals", label: "Fabric Fundamentals (Beginner, 8 weeks)" },
  { value: "power-bi-analysts", label: "Power BI for Analysts (Intermediate, 10 weeks)" },
  { value: "career-launchpad", label: "Data Career Launchpad (Advanced, 12 weeks)" },
];

type FormData = {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  track: string;
  // Step 2
  householdIncome: string;
  age: string;
  employmentStatus: string;
  highestQualification: string;
  // Step 3
  motivation: string;
  goals: string;
  availability: string;
  heardAbout: string;
  // Step 4
  hasLaptop: string;
  internetAccess: string;
  weeklyHours: string;
  additionalNeeds: string;
};

const initialData: FormData = {
  firstName: "", lastName: "", email: "", phone: "", city: "", country: "", track: "",
  householdIncome: "", age: "", employmentStatus: "", highestQualification: "",
  motivation: "", goals: "", availability: "", heardAbout: "",
  hasLaptop: "", internetAccess: "", weeklyHours: "", additionalNeeds: "",
};

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const update = (field: keyof FormData, value: string) =>
    setData((d) => ({ ...d, [field]: value }));

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  };
  const goPrev = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 rounded-full bg-[#0D4F47]/10 flex items-center justify-center mx-auto mb-6">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path d="M8 18l7 7L28 11" stroke="#0D4F47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2
          className="text-4xl text-[#0D4F47] mb-4"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Application received!
        </h2>
        <p className="text-stone-600 max-w-md mx-auto mb-8">
          Thank you, {data.firstName}. We'll review your application and be in touch within 5 working days. Check your inbox at{" "}
          <strong>{data.email}</strong>.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D4F47] text-white rounded-full font-semibold text-sm hover:bg-[#136058] transition-colors"
        >
          Back to home
        </a>
      </motion.div>
    );
  }

  const progress = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-3">
          {steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step >= s.id
                    ? "bg-[#0D4F47] text-white"
                    : "bg-stone-100 text-stone-400"
                }`}
              >
                {step > s.id ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  s.id
                )}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${step >= s.id ? "text-[#0D4F47]" : "text-stone-400"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#0D4F47] rounded-full"
            animate={{ width: `${progress === 0 ? 4 : progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction * 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -48 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Step 1: Personal background */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-2xl text-[#0D4F47] mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Tell us about yourself
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First name" id="firstName" required value={data.firstName} onChange={(v) => update("firstName", v)} placeholder="e.g. Amara" />
                  <Field label="Last name" id="lastName" required value={data.lastName} onChange={(v) => update("lastName", v)} placeholder="e.g. Osei" />
                </div>
                <Field label="Email address" id="email" type="email" required value={data.email} onChange={(v) => update("email", v)} placeholder="your@email.com" />
                <Field label="Phone number" id="phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} placeholder="+44 7700 000000" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="City / town" id="city" required value={data.city} onChange={(v) => update("city", v)} placeholder="e.g. Birmingham" />
                  <Field label="Country" id="country" required value={data.country} onChange={(v) => update("country", v)} placeholder="e.g. United Kingdom" />
                </div>
                <div>
                  <label htmlFor="track" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Which track are you applying for? <span className="text-[#E8890C]">*</span>
                  </label>
                  <select
                    id="track"
                    required
                    value={data.track}
                    onChange={(e) => update("track", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] focus:border-transparent transition"
                  >
                    <option value="">Select a track…</option>
                    {tracks.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Eligibility */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-2xl text-[#0D4F47] mb-2" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Eligibility information
                </h2>
                <p className="text-sm text-stone-500 mb-4">
                  We prioritise students from underserved backgrounds. This information is kept strictly confidential and used only for eligibility assessment.
                </p>
                <Field label="Your age" id="age" type="number" required value={data.age} onChange={(v) => update("age", v)} placeholder="e.g. 24" />
                <div>
                  <label htmlFor="employmentStatus" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Current employment status <span className="text-[#E8890C]">*</span>
                  </label>
                  <select
                    id="employmentStatus"
                    required
                    value={data.employmentStatus}
                    onChange={(e) => update("employmentStatus", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] transition"
                  >
                    <option value="">Select…</option>
                    <option>Unemployed</option>
                    <option>Part-time employed</option>
                    <option>Full-time employed (career changer)</option>
                    <option>Student</option>
                    <option>Self-employed / freelance</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="householdIncome" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Annual household income <span className="text-[#E8890C]">*</span>
                  </label>
                  <select
                    id="householdIncome"
                    required
                    value={data.householdIncome}
                    onChange={(e) => update("householdIncome", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] transition"
                  >
                    <option value="">Select…</option>
                    <option>Under £15,000</option>
                    <option>£15,000 – £25,000</option>
                    <option>£25,000 – £35,000</option>
                    <option>Over £35,000</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="highestQualification" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Highest educational qualification
                  </label>
                  <select
                    id="highestQualification"
                    value={data.highestQualification}
                    onChange={(e) => update("highestQualification", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] transition"
                  >
                    <option value="">Select…</option>
                    <option>No formal qualifications</option>
                    <option>GCSEs / O-Levels</option>
                    <option>A-Levels / BTECs</option>
                    <option>Undergraduate degree</option>
                    <option>Postgraduate degree</option>
                    <option>Other / vocational</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Motivation & goals */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-2xl text-[#0D4F47] mb-2" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Your motivation & goals
                </h2>
                <p className="text-sm text-stone-500 mb-4">
                  This is the most important part of your application. Be honest and specific — we read every response.
                </p>
                <div>
                  <label htmlFor="motivation" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Why do you want to join HyperEducation? <span className="text-[#E8890C]">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    required
                    rows={4}
                    value={data.motivation}
                    onChange={(e) => update("motivation", e.target.value)}
                    placeholder="Tell us about your situation and why this program matters to you…"
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] resize-y transition"
                  />
                </div>
                <div>
                  <label htmlFor="goals" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    What career goal are you working towards? <span className="text-[#E8890C]">*</span>
                  </label>
                  <textarea
                    id="goals"
                    required
                    rows={3}
                    value={data.goals}
                    onChange={(e) => update("goals", e.target.value)}
                    placeholder="e.g. Become a Data Analyst at a healthcare organisation within 12 months…"
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] resize-y transition"
                  />
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    When are you typically available to study? <span className="text-[#E8890C]">*</span>
                  </label>
                  <select
                    id="availability"
                    required
                    value={data.availability}
                    onChange={(e) => update("availability", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] transition"
                  >
                    <option value="">Select…</option>
                    <option>Weekday mornings</option>
                    <option>Weekday evenings</option>
                    <option>Weekends</option>
                    <option>Flexible / fully available</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="heardAbout" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    How did you hear about us?
                  </label>
                  <select
                    id="heardAbout"
                    value={data.heardAbout}
                    onChange={(e) => update("heardAbout", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] transition"
                  >
                    <option value="">Select…</option>
                    <option>Social media (LinkedIn, Twitter, etc.)</option>
                    <option>Word of mouth / friend</option>
                    <option>Job centre / welfare service</option>
                    <option>Partner organisation</option>
                    <option>Google search</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Tech access */}
            {step === 4 && (
              <div className="space-y-5">
                <h2 className="text-2xl text-[#0D4F47] mb-2" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Technology access check
                </h2>
                <p className="text-sm text-stone-500 mb-4">
                  We want to make sure you can fully participate — and if you can't, we'll work to fix that. We have a laptop lending programme and data SIM grants.
                </p>
                <div>
                  <label htmlFor="hasLaptop" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Do you have regular access to a laptop or desktop computer? <span className="text-[#E8890C]">*</span>
                  </label>
                  <select
                    id="hasLaptop"
                    required
                    value={data.hasLaptop}
                    onChange={(e) => update("hasLaptop", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] transition"
                  >
                    <option value="">Select…</option>
                    <option>Yes, I own one</option>
                    <option>I have shared access</option>
                    <option>No — I need support</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="internetAccess" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    What is your home internet situation? <span className="text-[#E8890C]">*</span>
                  </label>
                  <select
                    id="internetAccess"
                    required
                    value={data.internetAccess}
                    onChange={(e) => update("internetAccess", e.target.value)}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] transition"
                  >
                    <option value="">Select…</option>
                    <option>Reliable broadband</option>
                    <option>Mobile data only</option>
                    <option>Unreliable / limited access</option>
                    <option>No home internet — I need support</option>
                  </select>
                </div>
                <Field
                  label="How many hours per week can you commit to study?"
                  id="weeklyHours"
                  type="number"
                  required
                  value={data.weeklyHours}
                  onChange={(v) => update("weeklyHours", v)}
                  placeholder="e.g. 10"
                />
                <div>
                  <label htmlFor="additionalNeeds" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Any additional support needs we should know about?
                  </label>
                  <textarea
                    id="additionalNeeds"
                    rows={3}
                    value={data.additionalNeeds}
                    onChange={(e) => update("additionalNeeds", e.target.value)}
                    placeholder="e.g. dyslexia, childcare responsibilities, physical accessibility needs…"
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] resize-y transition"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-stone-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={goPrev}
              className="flex items-center gap-2 px-5 py-2.5 border border-stone-200 text-stone-700 rounded-xl text-sm font-semibold hover:bg-stone-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#0D4F47] text-white rounded-xl text-sm font-semibold hover:bg-[#136058] active:scale-95 transition-all duration-200"
            >
              Continue
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ) : (
            <button
              type="submit"
              id="apply-submit-btn"
              className="flex items-center gap-2 px-8 py-3 bg-[#E8890C] text-white rounded-xl text-sm font-bold hover:bg-[#edA030] active:scale-95 transition-all duration-200 shadow-sm"
            >
              Submit application
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2.5 8h11M9.5 4.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// ── Reusable field ─────────────────────────
function Field({
  label, id, type = "text", value, onChange, placeholder, required,
}: {
  label: string; id: string; type?: string; value: string;
  onChange: (v: string) => void; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-1.5">
        {label} {required && <span className="text-[#E8890C]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F47] focus:border-transparent transition"
      />
    </div>
  );
}
