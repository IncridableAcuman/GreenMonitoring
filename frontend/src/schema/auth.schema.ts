import { z } from 'zod';
export const RegisterSchema = z.object({
    firstname: z.string().min(3, "Firstname must be greater than 3 characters!").max(50, "Firstname must be less than 50 characters!"),
    lastname: z.string().min(3, "Lastname must be greater than 3 characters!").max(50, "Lastname must be less than 50 characters!"),
    username: z.string().min(3, "Username must be greater than 3 characters!").max(50, "Username must be less than 50 characters!"),
    email: z.email("Invalid email format!"),
    password: z.string().min(8, "Password must be greater than 8 characters!").max(50, "Password must be less than 50 characters!")
});

export const LoginSchema = z.object({
    email: z.email("Invalid email format!"),
    password: z.string().min(8, "Password must be greater than 8 characters!").max(50, "Password must be less than 50 characters!")
});

export const ForgotPasswordSchema = z.object({
    email: z.email("Invalid email format!"),
});

export const ResetPasswordSchema = z.object({
    password: z.string().min(8, "Password must be greater than 8 characters!").max(50, "Password must be less than 50 characters!"),
    confirmPassword: z.string().min(8, "Confirm password must be greater than 8 characters!").max(50, "Confirm password must be less than 50 characters!")

});

export type RegisterFormInputs = z.infer<typeof RegisterSchema>;

export type LoginFormInputs = z.infer<typeof LoginSchema>;

export type ForgotPasswordFormInput = z.infer<typeof ForgotPasswordSchema>;

export type ResetPasswordFormInputs = z.infer<typeof ResetPasswordSchema>;