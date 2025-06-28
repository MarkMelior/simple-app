'use client';

import { type FC, useActionState } from 'react';

import { cn } from '@/shared/lib/common';
import { Button, Input } from '@/shared/ui/client';

import { login } from '../services/login';

interface FormLoginProps {
  className?: string
  isDisabled?: boolean
}

export const FormLoginExample: FC<FormLoginProps> = ({
  className,
  isDisabled,
}) => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action} className={cn('grid gap-2 h-fit', className)}>
      <Input
        errorMessage={state?.errors?.username}
        isDisabled={isDisabled}
        isInvalid={Boolean(state?.errors?.username)}
        name="username"
        placeholder="Username"
      />
      <Input
        errorMessage={state?.errors?.password}
        isDisabled={isDisabled}
        isInvalid={Boolean(state?.errors?.password)}
        name="password"
        placeholder="Password"
        type="password"
      />
      {state?.message && (
        <p className="text-sm text-danger">{state?.message}</p>
      )}
      <Button
        className="mt-2 w-full"
        color="primary"
        isDisabled={isDisabled}
        isLoading={pending}
        type="submit"
      >
        {pending ? 'Submitting...' : 'Login'}
      </Button>
    </form>
  );
};
