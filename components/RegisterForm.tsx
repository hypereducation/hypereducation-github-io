"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { registrationSchema, getPasswordStrength } from "@/lib/validations/auth";
import type { RegistrationFormData } from "@/lib/types/auth";
import type { PasswordStrength } from "@/lib/validations/auth";

type FieldErrors = Partial<Record<keyof RegistrationFormData, string>>;

const initialData: RegistrationFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [data, setData] = useState<RegistrationFormData>(initialData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const update = (field: keyof RegistrationFormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const result = registrationSchema.safeParse(data);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: FieldErrors = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof RegistrationFormData;
      if (field && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    setErrors(fieldErrors);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json()) as { message: string };

      if (res.ok) {
        setSuccess(true);
        return;
      }

      if (res.status === 409) {
        setErrors({ email: json.message });
      } else if (res.status === 400) {
        setApiError(json.message);
      } else {
        setApiError(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setApiError("Unable to connect. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 rounded-full bg-[#0D4F47]/10 flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path
              d="M5 14l6 6L23 8"
              stroke="#0D4F47"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2
          className="text-2xl text-[#0D4F47] mb-3"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Check your email
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto">
          We sent a confirmation link to <strong className="text-stone-700">{data.email}</strong>.
          Click it to activate your account.
        </p>
      </motion.div>
    );
  }

  const strength = getPasswordStrength(data.password);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {apiError && (
        <div
          role="alert"
          className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
        >
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <TextField
          id="fullName"
          label="Full name"
          type="text"
          value={data.fullName}
          onChange={(v) => update("fullName", v)}
          error={errors.fullName}
          placeholder="e.g. Fatima Khan"
          autoComplete="name"
          required
        />

        <TextField
          id="email"
          label="Email address"
          type="email"
          value={data.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />

        <div>
          <PasswordField
            id="password"
            label="Password"
            value={data.password}
            onChange={(v) => update("password", v)}
            error={errors.password}
            show={showPassword}
            onToggleShow={() => setShowPassword((s) => !s)}
            autoComplete="new-password"
            placeholder="Minimum 8 characters"
            required
          />
          {data.password.length > 0 && (
            <PasswordStrengthBar strength={strength} />
          )}
        </div>

        <PasswordField
          id="confirmPassword"
          label="Confirm password"
          value={data.confirmPassword}
          onChange={(v) => update("confirmPassword", v)}
          error={errors.confirmPassword}
          show={showConfirm}
          onToggleShow={() => setShowConfirm((s) => !s)}
          autoComplete="new-password"
          placeholder="Repeat your password"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0D4F47] text-white text-sm font-semibold rounded-xl hover:bg-[#136058] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {loading ? (
            <>
              <Spinner />
              Creating account…
            </>
          ) : (
            "Create account"
          )}
        </button>
      </form>
    </motion.div>
  );
}

function TextField({
  id,
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-1.5">
        {label} {required && <span className="text-[#E8890C]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 border rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition ${
          error
            ? "border-red-300 focus:ring-red-400"
            : "border-stone-200 focus:ring-[#0D4F47]"
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function PasswordField({
  id,
  label,
  value,
  onChange,
  error,
  show,
  onToggleShow,
  autoComplete,
  placeholder,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  show: boolean;
  onToggleShow: () => void;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-stone-700 mb-1.5">
        {label} {required && <span className="text-[#E8890C]">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full px-4 py-3 pr-11 border rounded-xl bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition ${
            error
              ? "border-red-300 focus:ring-red-400"
              : "border-stone-200 focus:ring-[#0D4F47]"
          }`}
        />
        <button
          type="button"
          onClick={onToggleShow}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors p-1"
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function PasswordStrengthBar({ strength }: { strength: PasswordStrength }) {
  const config: Record<PasswordStrength, { label: string; color: string; pct: number }> = {
    weak: { label: "Weak", color: "bg-red-400", pct: 33 },
    fair: { label: "Fair", color: "bg-yellow-400", pct: 66 },
    strong: { label: "Strong", color: "bg-green-500", pct: 100 },
  };
  const { label, color, pct } = config[strength];

  return (
    <div className="mt-2">
      <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: "0%" }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <p className={`text-xs mt-1 font-medium ${
        strength === "weak" ? "text-red-500" :
        strength === "fair" ? "text-yellow-600" :
        "text-green-600"
      }`}>
        Password strength: {label}
      </p>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.12 14.12a3 3 0 11-4.24-4.24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1"
        y1="1"
        x2="23"
        y2="23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
