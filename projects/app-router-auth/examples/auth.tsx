import { LogoutButton } from '@/features';
import { CodeBlock } from '@/shared/ui';
import { Card } from '@nextui-org/react';
import { FiUserCheck } from 'react-icons/fi';
import { getUserExample } from './services/user';
import { FormLoginExample } from './ui/form-login';

export const AuthExample = async () => {
	const user = await getUserExample();

	return (
		<>
			{user && (
				<Card className='mb-6 py-2 px-4 flex-row justify-between items-center'>
					<div className='flex gap-3 items-center'>
						<FiUserCheck size={18} className='text-default-400' />
						<p className='text-sm'>
							You have successfully logged in as an {user?.name}
						</p>
					</div>
					<LogoutButton />
				</Card>
			)}

			<div className='grid sm:grid-cols-2 gap-12'>
				<FormLoginExample className='w-full' isDisabled={Boolean(user)} />
				<CodeBlock
					text={
						'# Administrator:\n- Username: admin\n- Password: pass\n\n# User:\n- Username: user\n- Password: pass'
					}
					className='my-0 w-full'
					language='Markdown'
				/>
			</div>
		</>
	);
};
