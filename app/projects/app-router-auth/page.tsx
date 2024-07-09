import { FormLogin, FormRegister, getUser } from '@/features';
import { CodeBlock } from '@/shared/ui';
import { Header } from '@/widgets';
import { code1 } from './test';

export default async function AppRouterAuthPage() {
	const user = await getUser();

	return (
		<>
			<Header
				note='Auth'
				title='Next.js: Authentication'
				description='Best practices for Server Components, Actions, Middleware'
			/>

			<div id='content-wrapper' className=''>
				<p>Prisma ORM</p>
				<CodeBlock text={code1} fileName='features/auth/services/login.ts' />
			</div>

			{user && <p>Hi, {user.name}!</p>}

			<FormRegister />
			<FormLogin />
		</>
	);
}
