import { FiUserCheck } from 'react-icons/fi';

import { Card, CodeBlock } from '@/shared/ui/client';

import { LogoutButton } from './features/auth/ui/logout-button/logout-button'; // TODO
import { getUserExample } from './services/user';
import { FormLoginExample } from './ui/form-login';

export const AuthExample = async () => {
  const user = await getUserExample();

  return (
    <>
      {user && (
        <Card className="mb-6 py-2 px-4 flex-row justify-between items-center">
          <div className="flex gap-3 items-center">
            <FiUserCheck className="text-default-400" size={18} />
            <p className="text-sm">
              {`Вы успешно вошли в систему как ${user?.name}`}
            </p>
          </div>
          <LogoutButton />
        </Card>
      )}

      <div className="grid sm:grid-cols-2 gap-12">
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
