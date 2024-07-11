'use client';

import { cn } from '@/shared/lib';
import { Button, Input } from '@nextui-org/react';
import { FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { signup } from '../../services/signup';

interface FormSignupProps {
	className?: string;
}

export const FormSignup: FC<FormSignupProps> = ({ className }) => {
	const [state, action] = useFormState(signup, undefined);
	const { pending } = useFormStatus();

	return (
		<form action={action} className={cn('grid gap-2 h-fit', className)}>
			<Input
				name='name'
				placeholder='Name'
				errorMessage={state?.errors?.name}
				isInvalid={Boolean(state?.errors?.name)}
			/>
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
				{pending ? 'Submitting...' : 'Signup'}
			</Button>
		</form>
	);
};
