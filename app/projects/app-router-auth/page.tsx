import { FormLogin, FormRegister, getUser } from '@/features';
import { CodeBlock } from '@/shared/ui';
import { Header } from '@/widgets';

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
				<CodeBlock text='(num) => num + 1' />
			</div>

			{user && <p>Hi, {user.name}!</p>}

			<FormRegister />
			<FormLogin />
		</>
	);
}
