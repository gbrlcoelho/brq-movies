import {z} from 'zod';

export const loginSchema = z.object({
  userName: z.string().min(3, 'Usuário deve ter no mínimo 3 caracteres'),
  password: z
    .string()
    .min(3, 'Senha deve ter no mínimo 3 caracteres')
    .max(15, 'Senha deve ter no máximo 15 caracteres'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
