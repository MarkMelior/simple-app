import { FormLogin, FormRegister, getUser } from '@/features';
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

			<div id='content-wrapper' className='prose prose-main dark:prose-dark'>
				<p>Prisma ORM</p>
			</div>

			{user && <p>Hi, {user.name}!</p>}

			<FormRegister />
			<FormLogin />
		</>
	);
}
