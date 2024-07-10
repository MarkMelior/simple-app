import { FormLogin, FormRegister, getUser } from '@/features';
import { fetchGitHubFileContent } from '@/shared/lib';
import { CodeBlock } from '@/shared/ui';
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
			/>

			<div id='content-wrapper' className=''>
				<p>Prisma ORM</p>
				<CodeBlock text={code1} fileName={codePath1.slice(4)} />
			</div>

			{user && <p>Hi, {user.name}!</p>}

			<FormRegister />
			<FormLogin />
		</>
	);
}
