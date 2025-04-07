import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(4, "O nome de usuário deve ter pelo menos 4 caracteres")
    .max(50, "O nome de usuário não pode ter mais de 50 caracteres"),
  password: z
    .string()
    .min(4, "A senha deve ter pelo menos 8 caracteres")
    .max(100, "A senha não pode ter mais de 100 caracteres"),
});

export const registerSchema = z.object({
  username: z
    .string()
    .min(4, "O nome de usuário deve ter pelo menos 4 caracteres")
    .max(50, "O nome de usuário não pode ter mais de 50 caracteres"),
  password: z
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .max(100, "A senha não pode ter mais de 100 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
