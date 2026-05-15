import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Your HyperEducation learning dashboard — track progress, download certificates, and message your mentor.",
};

const modules = [
  { name: "Introduction to Microsoft Fabric", status: "complete", progress: 100 },
  { name: "Lakehouses & OneLake Architecture", status: "complete", progress: 100 },
  { name: "Data Pipelines: Ingestion & Orchestration", status: "complete", progress: 100 },
  { name: "Dataflows Gen2 & Power Query", status: "in-progress", progress: 67 },
  { name: "Semantic Models & DirectLake Mode", status: "locked", progress: 0 },
  { name: "Power BI Reports & Dashboards", status: "locked", progress: 0 },
  { name: "Data Governance & Workspace Management", status: "locked", progress: 0 },
  { name: "Capstone Project: End-to-end Lakehouse", status: "locked", progress: 0 },
];

const messages = [
  {
    id: "msg-1",
    from: "James Hartley",
    role: "Lead Mentor",
    time: "2 hours ago",
    preview: "Great work on the Dataflows session yesterday! Your approach to the M query transformation was really solid. For the next module, I'd suggest reviewing the...",
    unread: true,
  },
  {
    id: "msg-2",
    from: "HyperEducation Team",
    role: "Admin",
    time: "Yesterday",
    preview: "Reminder: Your next live session is this Thursday at 7:00 PM GMT. The Zoom link has been sent to your email. See you there!",
    unread: false,
  },
  {
    id: "msg-3",
    from: "Aisha Ben-Ali",
    role: "Student Success",
    time: "3 days ago",
    preview: "Hi! Just checking in — how are you finding the pace so far? Don't hesitate to reach out if anything feels overwhelming. That's what we're here for.",
    unread: false,
  },
];

const resources = [
  { name: "Microsoft Fabric documentation", href: "https://learn.microsoft.com/fabric", icon: "📚" },
  { name: "Power BI community forum", href: "https://community.fabric.microsoft.com", icon: "💬" },
  { name: "DAX patterns reference", href: "https://daxpatterns.com", icon: "⚡" },
  { name: "Cohort 8 Slack workspace", href: "#", icon: "💼" },
  { name: "DP-600 exam study guide", href: "#", icon: "🎯" },
];

export default function DashboardPage() {
  const completedModules = modules.filter((m) => m.status === "complete").length;
  const overallProgress = Math.round((completedModules / modules.length) * 100);

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Dashboard header */}
      <div className="bg-[#0D4F47] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-white/50 text-sm mb-1">Welcome back,</p>
              <h1
                className="text-3xl text-[#FAF6EF]"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Amara Osei
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-xl px-4 py-2.5 text-center">
                <p className="text-2xl font-bold text-[#E8890C]" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  {completedModules}/{modules.length}
                </p>
                <p className="text-xs text-white/50">modules done</p>
              </div>
              <div className="bg-white/10 rounded-xl px-4 py-2.5 text-center">
                <p className="text-2xl font-bold text-[#E8890C]" style={{ fontFamily: "var(--font-dm-serif)" }}>
                  Wk 4
                </p>
                <p className="text-xs text-white/50">of 8</p>
              </div>
            </div>
          </div>

          {/* Overall progress */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/70 font-medium">Overall course progress</span>
              <span className="text-[#E8890C] font-bold">{overallProgress}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E8890C] rounded-full transition-all duration-1000"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column: Modules + Resources */}
          <div className="lg:col-span-2 space-y-6">
            {/* Module progress */}
            <section aria-labelledby="modules-heading">
              <div className="flex items-center justify-between mb-4">
                <h2
                  id="modules-heading"
                  className="text-xl text-[#0D4F47]"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  Fabric Fundamentals — Modules
                </h2>
                <span className="text-xs text-stone-400 font-medium">8-week track</span>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-100">
                {modules.map((module, i) => (
                  <div key={i} className={`flex items-center gap-4 px-6 py-4 ${module.status === "locked" ? "opacity-50" : ""}`}>
                    <div className="flex-shrink-0">
                      {module.status === "complete" && (
                        <div className="w-8 h-8 rounded-full bg-[#0D4F47] flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                      {module.status === "in-progress" && (
                        <div className="w-8 h-8 rounded-full border-2 border-[#E8890C] flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#E8890C]" />
                        </div>
                      )}
                      {module.status === "locked" && (
                        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <rect x="2" y="5" width="8" height="6" rx="1" stroke="#9ca3af" strokeWidth="1.2" />
                            <path d="M4 5V3.5a2 2 0 014 0V5" stroke="#9ca3af" strokeWidth="1.2" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${module.status === "locked" ? "text-stone-400" : "text-stone-800"}`}>
                        {module.name}
                      </p>
                      {module.status === "in-progress" && (
                        <div className="mt-1.5 h-1 bg-stone-100 rounded-full overflow-hidden w-48">
                          <div
                            className="h-full bg-[#E8890C] rounded-full"
                            style={{ width: `${module.progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      {module.status === "complete" && (
                        <span className="text-xs text-[#0D4F47] font-semibold">Complete</span>
                      )}
                      {module.status === "in-progress" && (
                        <span className="text-xs text-[#E8890C] font-semibold">{module.progress}%</span>
                      )}
                      {module.status === "locked" && (
                        <span className="text-xs text-stone-300 font-semibold">Locked</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certificate */}
            <section aria-labelledby="cert-heading">
              <h2
                id="cert-heading"
                className="text-xl text-[#0D4F47] mb-4"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Certificate
              </h2>
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0D4F47]/8 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#0D4F47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0D4F47] mb-1">Fabric Fundamentals Certificate</h3>
                    <p className="text-sm text-stone-500 mb-4">
                      Your certificate will be available once you complete all 8 modules and pass the final assessment. You're{" "}
                      <strong className="text-[#E8890C]">{overallProgress}%</strong> of the way there!
                    </p>
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-400 text-sm font-semibold rounded-xl cursor-not-allowed"
                      aria-label="Certificate not yet available"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 10L7 3l5 7H2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Download PDF certificate
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section aria-labelledby="resources-heading">
              <h2
                id="resources-heading"
                className="text-xl text-[#0D4F47] mb-4"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Resources
              </h2>
              <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-100">
                {resources.map((res) => (
                  <a
                    key={res.name}
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-[#FAF6EF] transition-colors group"
                  >
                    <span className="text-lg" aria-hidden="true">{res.icon}</span>
                    <span className="text-sm font-medium text-stone-700 group-hover:text-[#0D4F47] flex-1 transition-colors">
                      {res.name}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-stone-300 group-hover:text-[#0D4F47] transition-colors" aria-hidden="true">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right column: Mentor inbox */}
          <div className="space-y-6">
            <section aria-labelledby="inbox-heading">
              <div className="flex items-center justify-between mb-4">
                <h2
                  id="inbox-heading"
                  className="text-xl text-[#0D4F47]"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  Mentor inbox
                </h2>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#E8890C] text-white text-xs font-bold">
                  1
                </span>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-100">
                {messages.map((msg) => (
                  <button
                    key={msg.id}
                    className={`w-full text-left px-5 py-4 hover:bg-[#FAF6EF] transition-colors ${msg.unread ? "bg-[#0D4F47]/3" : ""}`}
                    aria-label={`Message from ${msg.from}: ${msg.preview.slice(0, 60)}…`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#0D4F47]">{msg.from}</span>
                        {msg.unread && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8890C]" aria-label="Unread" />
                        )}
                      </span>
                      <span className="text-xs text-stone-400">{msg.time}</span>
                    </div>
                    <p className="text-xs text-stone-400 mb-1">{msg.role}</p>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">{msg.preview}</p>
                  </button>
                ))}
              </div>
              <button
                className="w-full mt-3 py-3 border border-stone-200 rounded-xl text-sm font-semibold text-[#0D4F47] hover:bg-[#0D4F47] hover:text-white transition-all duration-200"
              >
                Send a message
              </button>
            </section>

            {/* Next session */}
            <section aria-labelledby="next-session-heading">
              <h2
                id="next-session-heading"
                className="text-xl text-[#0D4F47] mb-4"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Next live session
              </h2>
              <div className="bg-[#0D4F47] rounded-2xl p-6 text-[#FAF6EF]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#E8890C] mb-2">
                  Thursday 22 May
                </p>
                <p className="text-lg font-semibold mb-1">Semantic Models & DirectLake</p>
                <p className="text-white/60 text-sm mb-5">7:00 PM – 9:00 PM GMT · Zoom</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E8890C] text-white text-sm font-semibold rounded-xl hover:bg-[#edA030] transition-colors"
                >
                  Join session
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </section>

            {/* Back to site */}
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-stone-400 hover:text-[#0D4F47] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9.5 7H2M5 3.5L1.5 7 5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to main site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
