import { z } from 'zod';

export const SignupFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Name must be at least 2 characters long.' })
		.trim(),
	username: z
		.string()
		.min(4, { message: 'Be at least 4 characters long' })
		.trim(),
	password: z
		.string()
		.min(8, { message: 'Be at least 8 characters long' })
		.regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
		.regex(/[0-9]/, { message: 'Contain at least one number.' })
		.regex(/[^a-zA-Z0-9]/, {
			message: 'Contain at least one special character.',
		})
		.trim(),
});

export const LoginFormSchema = z.object({
	username: z.string().min(1, { message: 'Username field must not be empty.' }),
	password: z.string().min(1, { message: 'Password field must not be empty.' }),
});

export type FormState =
	| {
			errors?: {
				username?: string[];
				password?: string[];
				name?: string[];
			};
			message?: string;
	  }
	| undefined;

export type SessionPayload = {
	userId: string | number;
	expiresAt: Date;
};