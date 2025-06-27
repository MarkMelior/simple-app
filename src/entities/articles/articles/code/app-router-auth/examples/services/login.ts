'use server';

import { usersExample } from './data';
import { LoginFormExampleSchema } from './definitions';
import { createSession } from '../api/session';

import type { FormState } from './definitions';

export async function login(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = LoginFormExampleSchema.safeParse({
    password: formData.get('password'),
    username: formData.get('username'),
  });
  const errorMessage = { message: 'Invalid login credentials.' };

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Query the database for the user with the given email
  const { password, username } = validatedFields.data;

  const user = usersExample.find(
    (user) => user.username === username && user.password === password,
  );

  if (!user) {
    return errorMessage;
  }

  // 3. If login successful, create a session for the user and redirect
  const userId = user.id.toString();

  await createSession(userId);
}
