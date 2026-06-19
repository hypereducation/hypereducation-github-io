export type RegistrationFormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthError = {
  message: string;
  code?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  fullName: string;
};
