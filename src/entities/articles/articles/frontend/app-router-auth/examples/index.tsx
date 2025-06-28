import { FiUserCheck } from 'react-icons/fi';

import { CodeBlock } from '@/shared/ui';
import { Card } from '@/shared/ui/client';

import { getUserExample } from './services/user';
import { FormLoginExample } from './ui/form-login';
import { LogoutButton } from './ui/logout-button';

export const AuthExample = async () => {
  const user = await getUserExample();

  return (
    <>
      {user && (
        <Card className="mb-6 flex-row items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <FiUserCheck className="text-default-400" size={18} />
            <p className="text-sm">
              {`Вы успешно вошли в систему как ${user?.name}`}
            </p>
          </div>
          <LogoutButton />
        </Card>
      )}

      <div className="grid gap-12 sm:grid-cols-2">
        <FormLoginExample className="w-full" isDisabled={Boolean(user)} />
        <CodeBlock
          className="my-0 w-full"
          hideHeader={true}
          lang="markdown"
          text={
            '# Administrator:\n- Username: admin\n- Password: pass\n\n# User:\n- Username: user\n- Password: pass'
          }
        />
      </div>
    </>
  );
};
