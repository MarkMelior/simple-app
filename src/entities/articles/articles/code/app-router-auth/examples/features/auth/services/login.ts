'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { createSession } from '../api/session';
import { LoginFormSchema } from '../types/definitions';

import type { FormState } from '../types/definitions';

const prisma = new PrismaClient();

export async function login(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    password: formData.get('password'),
    username: formData.get('username'),
  });
  const errorMessage = { message: 'Invalid login credentials.' };

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Query the database for the user with the given email
  const { password, username } = validatedFields.data;

  const user = await prisma.user.findFirst({
    where: { username },
  });

  if (!user) {
    return errorMessage;
  }

  // 3. Compare the user's password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, user.password);

  // If the password does not match, return early
  if (!passwordMatch) {
    return errorMessage;
  }

  // 4. If login successful, create a session for the user and redirect
  const userId = user.id.toString();

  await createSession(userId);
}
