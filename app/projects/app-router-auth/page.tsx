import { FormLogin, FormRegister, getUser } from '@/features';
import { fetchGitHubFileContent } from '@/shared/lib';
import { Code, CodeBlock } from '@/shared/ui';
import { Header } from '@/widgets';

export default async function AppRouterAuthPage() {
	const user = await getUser();
	const codePath1 = 'src/features/auth/services/login.ts';
	const code1 = await fetchGitHubFileContent({ path: codePath1 });

	return (
		<>
			<Header
				note='Auth'
				title='Next.js: Authentication'
				description='Best practices for Server Components, Actions, Middleware'
				tags={['TypeScript', 'Cookie', 'SSR']}
			/>

			<div className='relative z-20'>
				<p>
					Получение данных пользователя:{' '}
					<Code text='const user = await getUser();' />
				</p>
				<CodeBlock
					text={code1}
					fileName={codePath1.slice(4)}
					github={{ path: codePath1 }}
				/>
			</div>

			{user && <p>Hi, {user.name}!</p>}

			<FormRegister />
			<FormLogin />
		</>
	);
}
