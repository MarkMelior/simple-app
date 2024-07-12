'use client';

import { cn } from '@/shared/lib';
import { Button, Input } from '@nextui-org/react';
import { FC } from 'react';
import { useFormState } from 'react-dom';
import { login } from '../services/login';

interface FormLoginProps {
	className?: string;
	isDisabled?: boolean;
}

export const FormLoginExample: FC<FormLoginProps> = ({
	className,
	isDisabled,
}) => {
	const [state, action, pending] = useFormState(login, undefined);

	return (
		<form action={action} className={cn('grid gap-2 h-fit', className)}>
			<Input
				name='username'
				placeholder='Username'
				errorMessage={state?.errors?.username}
				isInvalid={Boolean(state?.errors?.username)}
				isDisabled={isDisabled}
			/>
			<Input
				name='password'
				placeholder='Password'
				type='password'
				errorMessage={state?.errors?.password}
				isInvalid={Boolean(state?.errors?.password)}
				isDisabled={isDisabled}
			/>
			{state?.message && (
				<p className='text-sm text-danger'>{state?.message}</p>
			)}
			<Button
				color='primary'
				type='submit'
				className='mt-2 w-full'
				isDisabled={isDisabled}
				isLoading={pending}
			>
				{pending ? 'Submitting...' : 'Login'}
			</Button>
		</form>
	);
};
