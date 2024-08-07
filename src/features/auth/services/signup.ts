'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { createSession } from '../api/session';
import { FormState, SignupFormSchema } from '../types/definitions';

const prisma = new PrismaClient();

export async function signup(
	state: FormState,
	formData: FormData,
): Promise<FormState> {
	// 1. Validate form fields
	const validatedFields = SignupFormSchema.safeParse({
		name: formData.get('name'),
		username: formData.get('username'),
		password: formData.get('password'),
	});

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	// 2. Prepare data for insertion into database
	const { name, username, password } = validatedFields.data;

	// 3. Check if the user's username already exists
	const existingUser = await prisma.user.findFirst({ where: { username } });

	if (existingUser) {
		return {
			message: 'Username already exists, please use a different username.',
		};
	}

	// Hash the user's password
	const hashedPassword = await bcrypt.hash(password, 10);

	// 3. Insert the user into the database or call an Auth Provider's API
	const user = await prisma.user.create({
		data: {
			name,
			username,
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
