import type { AuthUser } from '@supabase/supabase-js'

export type { AuthUser }

export type RegistrationFormData = {
  email: string
  password: string
  confirmPassword: string
  fullName: string
}

export type AuthError = {
  message: string
  code?: string
}
