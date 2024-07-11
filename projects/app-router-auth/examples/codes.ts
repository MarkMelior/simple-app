export const ExampleCodeJwtPath = 'src/features/auth/api/jwt.ts';
export const ExampleCodeJwt = `import { SignJWT, jwtVerify } from 'jose';
import { SessionPayload } from '../types/definitions';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ['HS256'],
		});
		return payload;
	} catch (error) {
		// console.log('Failed to verify session');
		return null;
	}
}`;

export const ExampleCodeLoginPath = 'src/features/auth/services/login.ts';
export const ExampleCodeLogin = `'use server';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { FormState, LoginFormSchema } from './definitions';
import { createSession } from './session';

const prisma = new PrismaClient();

export async function login(
	state: FormState,
	formData: FormData,
): Promise<FormState> {
	// 1. Validate form fields
	const validatedFields = LoginFormSchema.safeParse({
		username: formData.get('username'),
		password: formData.get('password'),
	});
	const errorMessage = { message: 'Invalid login credentials.' };

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	// 2. Query the database for the user with the given email
	const { username, password } = validatedFields.data;

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
}`;

export const ExampleCodeLogoutPath = 'src/features/auth/services/logout.ts';
export const ExampleCodeLogout = `'use server';

import { deleteSession } from '../api/session';

export async function logout() {
	deleteSession();
}`;

export const ExampleCodeDefinitionsPath =
	'src/features/auth/types/definitions.ts';
export const ExampleCodeDefinitions = `import { z } from 'zod';

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
}`;

export const ExampleCodeSessionPath = 'src/features/auth/api/session.ts';
export const ExampleCodeSession = `import 'server-only';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { decrypt, encrypt } from './jwt';

export async function createSession(userId: string) {
	const expiresAt = new Date(Date.now() + 7 * 60 * 60 * 1000);
	const session = await encrypt({ userId, expiresAt });

	cookies().set('session', session, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: 'lax',
		path: '/',
	});

	redirect('/dashboard');
}

export async function verifySession() {
	const cookie = cookies().get('session')?.value;
	const session = await decrypt(cookie);

	if (!session?.userId) {
		redirect('/login');
		return null;
	}

	return { isAuth: true, userId: Number(session.userId) };
}

export function deleteSession() {
	cookies().delete('session');
	redirect('/login');
}`;

export const ExampleCodeUserPath = 'src/features/auth/services/user.ts';
export const ExampleCodeUser = `import 'server-only';

import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
import { verifySession } from '../api/session';

const prisma = new PrismaClient();

export const getUser = cache(async () => {
	const session = await verifySession();
	if (!session) return null;

	try {
		const user = await prisma.user.findFirst({
			where: {
				id: session.userId,
			},
			select: {
				id: true,
				username: true,
				name: true,
			},
		});

		return user;
	} catch (error) {
		console.log('Failed to fetch user');
		return null;
	}
})`;

export const ExampleCodeLoginFormPath =
	'src/features/auth/ui/login-form/login-form.tsx';
export const ExampleCodeLoginForm = `'use client';

import { cn } from '@/shared/lib';
import { Button, Input } from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '../../services/login';

interface FormLoginProps {
	className?: string;
}

export const FormLogin = ({ className }: FormLoginProps) => {
	const [state, action, pending] = useFormState(login, undefined);

	return (
		<form action={action} className={cn('grid gap-2 h-fit', className)}>
			<Input
				name='username'
				placeholder='Username'
				errorMessage={state?.errors?.username}
				isInvalid={Boolean(state?.errors?.username)}
			/>
			<Input
				name='password'
				placeholder='Password'
				type='password'
				errorMessage={state?.errors?.password}
				isInvalid={Boolean(state?.errors?.password)}
			/>
			{state?.message && (
				<p className='text-sm text-danger'>{state?.message}</p>
			)}
			<Button
				color='primary'
				type='submit'
				className='mt-2 w-full'
				isLoading={pending}
			>
				{pending ? 'Submitting...' : 'Login'}
			</Button>
		</form>
	);
}`;

export const ExampleCodeLogoutButtonPath =
	'src/features/auth/ui/logout-button/logout-button.tsx';
export const ExampleCodeLogoutButton = `'use client';

import { Button } from '@nextui-org/react';
import { RxExit } from 'react-icons/rx';
import { logout } from '../../services/logout';

export const LogoutButton = () => {
	return (
		<Button
			startContent={<RxExit size={18} />}
			color='danger'
			variant='flat'
			size='sm'
			onClick={async () => await logout()}
		>
			Logout
		</Button>
	);
}`;

export const ExampleCodePrismaPath = 'prisma/schema.prisma';
export const ExampleCodePrisma = `datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id       Int    @id @default(autoincrement())
  username String @unique
  password String
  name     String
}`;

export const ExampleCodeSignupPath = 'src/features/auth/services/signup.ts';
export const ExampleCodeSignup = `'use server';

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
}`;

export const ExampleCodeMiddlewarePath = 'src/middleware.ts';
export const ExampleCodeMiddleware = `import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from './features/auth/api/jwt';

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/signup', '/'];

export default async function middleware(req: NextRequest) {
	// 2. Check if the current route is protected or public
	const path = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	// 3. Decrypt the session from the cookie
	const cookie = cookies().get('session')?.value;
	const session = await decrypt(cookie);

	// 5. Redirect to /login if the user is not authenticated
	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/login', req.nextUrl));
	}

	// 6. Redirect to /dashboard if the user is authenticated
	if (
		isPublicRoute &&
		session?.userId &&
		!req.nextUrl.pathname.startsWith('/dashboard')
	) {
		return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
	}

	return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}`;
