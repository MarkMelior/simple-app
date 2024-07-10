'use client';

import { Button, Input } from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '../../services/login';

export const FormLogin = () => {
	const [state, action] = useFormState(login, undefined);
	const { pending } = useFormStatus();

	return (
		<form action={action} className='max-w-sm mx-auto grid gap-2'>
			<Input
				name='email'
				placeholder='Email'
				errorMessage={state?.errors?.email}
				isInvalid={Boolean(state?.errors?.email)}
			/>
			<Input
				name='password'
				placeholder='Password'
				type='password'
				errorMessage={state?.errors?.password}
				isInvalid={Boolean(state?.errors?.password)}
			/>
			<Button
				color='primary'
				aria-disabled={pending}
				type='submit'
				className='mt-2 w-full'
			>
				{pending ? 'Submitting...' : 'Login'}
			</Button>
		</form>
	);
};
