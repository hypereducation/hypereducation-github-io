import type { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create a HyperEducation account to track your learning progress and access exclusive resources.",
};

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-[#FAF6EF] flex flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        {/* Value proposition */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E8890C] mb-3">
            Join the community
          </p>
          <h1
            className="text-4xl text-[#0D4F47] leading-tight mb-3"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Create your account
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed">
            Join thousands of learners transforming their careers with
            data skills.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
          <RegisterForm />
        </div>

        {/* Sign-in link */}
        <p className="text-center text-sm text-stone-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#0D4F47] font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
