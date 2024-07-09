'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { FormState, SignupFormSchema } from './definitions';
import { createSession } from './session';

const prisma = new PrismaClient();

export async function signup(
	state: FormState,
	formData: FormData,
): Promise<FormState> {
	// 1. Validate form fields
	const validatedFields = SignupFormSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password'),
	});

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	// 2. Prepare data for insertion into database
	const { name, email, password } = validatedFields.data;

	// 3. Check if the user's email already exists
	const existingUser = await prisma.user.findFirst({ where: { email } });

	if (existingUser) {
		return {
			message: 'Email already exists, please use a different email or login.',
		};
	}

	// Hash the user's password
	const hashedPassword = await bcrypt.hash(password, 10);

	// 3. Insert the user into the database or call an Auth Provider's API
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
		select: { id: true },
	});

	if (!user) {
		return {
			message: 'An error occurred while creating your account.',
		};
	}

	// 4. Create a session for the user
	const userId = user.id.toString();
	await createSession(userId);
}
