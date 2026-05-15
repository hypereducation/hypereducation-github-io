"use client";

import Link from "next/link";

const footerLinks = {
  Programs: [
    { label: "Fabric Fundamentals", href: "/programs#fabric-fundamentals" },
    { label: "Power BI for Analysts", href: "/programs#power-bi-analysts" },
    { label: "Data Career Launchpad", href: "/programs#career-launchpad" },
  ],
  Organisation: [
    { label: "About Us", href: "/about" },
    { label: "Graduate Stories", href: "/stories" },
    { label: "Apply Now", href: "/apply" },
    { label: "Donate", href: "/donate" },
  ],
  Resources: [
    { label: "Student Dashboard", href: "/dashboard" },
    { label: "FAQ", href: "/about#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com",
    label: "X (Twitter)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D4F47] text-[#FAF6EF]" aria-label="Site footer">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8890C] mb-1">
                Newsletter
              </p>
              <h2
                className="text-2xl text-[#FAF6EF]"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Stay connected to our mission
              </h2>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-3"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-[#FAF6EF] placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8890C] focus:border-transparent transition"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#E8890C] text-white text-sm font-semibold rounded-xl hover:bg-[#edA030] active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="HyperEducation home">
              <div className="w-8 h-8 bg-[#E8890C] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 9L9 3L15 9L9 15L3 9Z" fill="#FAF6EF" />
                  <path d="M6 9L9 6L12 9L9 12L6 9Z" fill="#E8890C" />
                </svg>
              </div>
              <span
                className="text-[#FAF6EF] text-xl"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                HyperEducation
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering underrepresented talent to break into data careers through Microsoft Fabric and Power BI training.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#E8890C] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8890C] mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={`${heading}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} HyperEducation.
          </p>
          <p className="text-white/40 text-xs">
            Not affiliated with Microsoft Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
