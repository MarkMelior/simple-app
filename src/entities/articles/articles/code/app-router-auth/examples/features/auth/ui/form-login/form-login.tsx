'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { cn } from '@/shared/lib/react';
import { Button, Input } from '@/shared/ui/client';

import { login } from '../../services/login';

import type { FC } from 'react';

interface FormLoginProps {
  className?: string
}

export const FormLogin: FC<FormLoginProps> = ({ className }) => {
  const [state, action] = useFormState(login, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className={cn('grid gap-2 h-fit', className)}>
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
        {pending ? 'Submitting...' : 'Login'}
      </Button>
    </form>
  );
};
