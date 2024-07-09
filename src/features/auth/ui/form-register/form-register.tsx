'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { useFormState, useFormStatus } from 'react-dom';
import { signup } from '../../services/signup';

export const FormRegister = () => {
	const [state, action] = useFormState(signup, undefined);
	const { pending } = useFormStatus();

	return (
		<form action={action} className='max-w-sm mx-auto grid gap-2'>
			<Input
				name='name'
				placeholder='Name'
				errorMessage={state?.errors?.name}
				isInvalid={Boolean(state?.errors?.name)}
			/>
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
				{pending ? 'Submitting...' : 'Signup'}
			</Button>
		</form>
	);
};
