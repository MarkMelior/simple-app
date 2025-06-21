'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { cn } from '@/shared/lib/react';
import { Button, Input } from '@/shared/ui/client';

import { signup } from '../../services/signup';

import type { FC } from 'react';

interface FormSignupProps {
  className?: string
}

export const FormSignup: FC<FormSignupProps> = ({ className }) => {
  const [state, action] = useFormState(signup, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className={cn('grid gap-2 h-fit', className)}>
      <Input
        errorMessage={state?.errors?.name}
        isInvalid={Boolean(state?.errors?.name)}
        name="name"
        placeholder="Name"
      />
      <Input
        errorMessage={state?.errors?.username}
        isInvalid={Boolean(state?.errors?.username)}
        name="username"
        placeholder="Username"
      />
      <Input
        errorMessage={state?.errors?.password}
        isInvalid={Boolean(state?.errors?.password)}
        name="password"
        placeholder="Password"
        type="password"
      />
      <Button
        className="mt-2 w-full"
        color="primary"
        disabled={pending}
        type="submit"
      >
        {pending ? 'Submitting...' : 'Signup'}
      </Button>
    </form>
  );
};
