'use client';

import { cn } from '@/shared/lib';
import { Button, Input } from '@nextui-org/react';
import { FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '../../services/login';

interface FormLoginProps {
	className?: string;
}

export const FormLogin: FC<FormLoginProps> = ({ className }) => {
	const [state, action] = useFormState(login, undefined);
	const { pending } = useFormStatus();

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
