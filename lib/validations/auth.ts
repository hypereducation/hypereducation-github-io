import { z } from 'zod'

export const registrationSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { error: 'Full name must be at least 2 characters.' })
      .trim(),
    email: z.email({ error: 'Please enter a valid email address.' }),
    password: z
      .string()
      .min(8, { error: 'Password must be at least 8 characters.' })
      .regex(/[A-Z]/, { error: 'Password must contain at least one uppercase letter.' })
      .regex(/[0-9]/, { error: 'Password must contain at least one number.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

export type RegistrationSchema = z.infer<typeof registrationSchema>

export function getPasswordStrength(password: string): 'weak' | 'fair' | 'strong' {
  let score = 0

  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++

  if (score <= 2) return 'weak'
  if (score <= 3) return 'fair'
  return 'strong'
}
