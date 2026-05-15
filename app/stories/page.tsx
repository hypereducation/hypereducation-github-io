import type { Metadata } from "next";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Graduate Stories",
  description:
    "Meet HyperEducation graduates — from warehouses, factories, and care homes to data careers at HSBC, NHS, Tesco, and more.",
};

const trackColor: Record<string, string> = {
  "Fabric Fundamentals": "#d1f2ef",
  "Power BI for Analysts": "#fce8cc",
  "Data Career Launchpad": "#fef5e7",
};

const trackText: Record<string, string> = {
  "Fabric Fundamentals": "#0a3d37",
  "Power BI for Analysts": "#6b3700",
  "Data Career Launchpad": "#7a3e00",
};

export default function StoriesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D4F47] pt-32 pb-20 lg:pt-40 lg:pb-24" aria-label="Stories header">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-4">
              Graduate stories
            </p>
            <h1
              className="text-5xl lg:text-6xl text-[#FAF6EF] leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Every career
              <br />
              has a beginning.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              These are the stories of people who decided to change their lives —
              and did. Read about where they started, what they learned, and
              where they are now.
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

      {/* Stories grid */}
      <section className="bg-[#FAF6EF] py-16 pb-28" aria-label="Graduate stories grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <article
                key={story.id}
                className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(13,79,71,0.06)" }}
              >
                {/* Photo placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#0D4F47] to-[#2aa898] relative overflow-hidden flex items-end p-6">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #E8890C 0%, transparent 60%)" }} aria-hidden="true" />
                  <div className="relative flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-xl font-bold select-none">
                      {story.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg leading-none">{story.name}</p>
                      <p className="text-white/70 text-xs mt-0.5">{story.graduationYear} Graduate</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Track badge */}
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-4"
                    style={{
                      backgroundColor: trackColor[story.track] ?? "#d1f2ef",
                      color: trackText[story.track] ?? "#0a3d37",
                    }}
                  >
                    {story.track}
                  </span>

                  {/* Former situation */}
                  <p className="text-xs text-stone-400 mb-1 font-medium uppercase tracking-wide">
                    Before HyperEducation
                  </p>
                  <p className="text-sm text-stone-600 mb-4">{story.formerSituation}</p>

                  {/* Current role */}
                  <p className="text-xs text-stone-400 mb-1 font-medium uppercase tracking-wide">
                    Now
                  </p>
                  <p className="font-bold text-[#0D4F47] text-sm">
                    {story.currentRole}
                  </p>
                  <p className="text-sm text-stone-500">{story.employer}</p>

                  {/* Quote */}
                  <blockquote className="mt-4 pt-4 border-t border-stone-100">
                    <p className="text-sm text-stone-700 leading-relaxed italic">
                      "{story.quote}"
                    </p>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D4F47] py-20" aria-label="Become a graduate story CTA">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-4xl text-[#FAF6EF] mb-4"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Your story could be next.
          </h2>
          <p className="text-white/65 mb-8">
            Applications for Cohort 9 are open. Join hundreds of students who
            have already changed their futures.
          </p>
          <a
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8890C] text-white font-bold rounded-full hover:bg-[#edA030] active:scale-95 transition-all duration-200"
          >
            Apply now — it's free
          </a>
        </div>
      </section>
    </>
  );
}
