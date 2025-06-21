import { z } from 'zod';

export const LoginFormExampleSchema = z.object({
  password: z.string().min(1, { message: 'Password field must not be empty.' }),
  username: z.string().min(1, { message: 'Username field must not be empty.' }),
});

export type FormState =
  | {
    errors?: {
      username?: string[]
      password?: string[]
    }
    message?: string
  }
  | undefined;

export type SessionPayload = {
  userId: string | number
  expiresAt: Date
};
