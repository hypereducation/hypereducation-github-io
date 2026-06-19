import type { User } from '@supabase/supabase-js'

export type { User as AuthUser }

export type RegistrationFormData = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export type AuthError = {
  message: string
  code?: string
}
