import { NextRequest } from "next/server";
import { registrationSchema } from "@/lib/validations/auth";
import { createBrowserClient } from "@supabase/ssr";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }

  const result = registrationSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.issues[0];
    return Response.json(
      { message: firstError?.message ?? "Validation failed" },
      { status: 400 }
    );
  }

  const { email, password, fullName } = result.data;

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });

  if (error) {
    if (error.message.toLowerCase().includes("already registered") ||
        error.message.toLowerCase().includes("already exists") ||
        error.message.toLowerCase().includes("user already")) {
      return Response.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }
    return Response.json({ message: error.message }, { status: 500 });
  }

  return Response.json({ message: "Registration successful" }, { status: 201 });
}
