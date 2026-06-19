import { NextRequest, NextResponse } from 'next/server'
import { registrationSchema } from '@/lib/validations/auth'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  const result = registrationSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { message: 'Validation failed.', errors: result.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  const { email, password, fullName } = result.data
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  })

  if (error) {
    if (error.code === 'user_already_exists' || error.status === 422) {
      return NextResponse.json(
        { message: 'An account with this email already exists.' },
        { status: 409 },
      )
    }

    return NextResponse.json(
      { message: error.message },
      { status: 500 },
    )
  }

  return NextResponse.json(
    { message: 'Registration successful. Please check your email to confirm your account.', userId: data.user?.id },
    { status: 200 },
  )
}
