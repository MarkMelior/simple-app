import { LogoutButton } from '@/features';
import { Code, CodeBlock } from '@/shared/ui';
import { Header } from '@/widgets';
import { Card } from '@nextui-org/react';
import Link from 'next/link';
import {
	ExampleCodeDefinitions,
	ExampleCodeDefinitionsPath,
	ExampleCodeJwt,
	ExampleCodeJwtPath,
	ExampleCodeLogin,
	ExampleCodeLoginForm,
	ExampleCodeLoginFormPath,
	ExampleCodeLoginPath,
	ExampleCodeLogout,
	ExampleCodeLogoutButton,
	ExampleCodeLogoutButtonPath,
	ExampleCodeLogoutPath,
	ExampleCodeMiddleware,
	ExampleCodeMiddlewarePath,
	ExampleCodePrisma,
	ExampleCodePrismaPath,
	ExampleCodeSession,
	ExampleCodeSessionPath,
	ExampleCodeSignup,
	ExampleCodeSignupPath,
	ExampleCodeUser,
	ExampleCodeUserPath,
} from './examples/codes';
import { getUserExample } from './examples/services/user';
import { FormLoginExample } from './examples/ui/form-login';

export default async function AppRouterAuthPage() {
	const user = await getUserExample();
	// const ExampleCodeLoginPath = 'src/features/auth/services/login.ts';
	// const ExampleCodeLogin = await fetchGitHubFileContent({ path: ExampleCodeLoginPath });

	return (
		<>
			<Header
				note='Auth'
				title='Next.js: Authentication'
				description='Best practices for Server Components, Actions, Middleware'
				tags={['TypeScript', 'Cookie', 'SSR', 'Prisma']}
			/>

			{user && (
				<Card className='mb-6 py-2 px-3 flex-row justify-between items-center'>
					<p className='text-sm'>
						You have successfully logged in as {user?.name}
					</p>
					<LogoutButton />
				</Card>
			)}

			<div className='grid sm:grid-cols-2 gap-12'>
				<FormLoginExample className='w-full' />
				<CodeBlock
					text={
						'# Administrator:\n- Username: admin\n- Password: pass\n\n# User:\n- Username: user\n- Password: pass'
					}
					className='my-0 w-full'
					language='Markdown'
				/>
			</div>

			<div className='relative z-20'>
				<hr className='my-12 border-default-100' />
				<h2
					className='flex whitespace-pre-wrap text-xl font-bold mb-6'
					id='toggling-dark-mode-manually'
				>
					<Link
						className='group relative border-none lg:-ml-2 lg:pl-2'
						href='#toggling-dark-mode-manually'
					>
						<span className='absolute -ml-8 hidden items-center border-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 lg:flex'>
							<span className='flex h-6 w-6 items-center justify-center rounded-md text-default-400 shadow-sm ring-1 bg-default-100 hover:bg-default-200 ring-default-900/5 hover:text-default-600 hover:shadow hover:ring-default-900/10 dark:shadow-none'>
								<svg width='12' height='12' fill='none' aria-hidden='true'>
									<path
										d='M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
									/>
								</svg>
							</span>
						</span>
						Реализация
					</Link>
				</h2>
				<p className='text-default-600'>
					Получение данных пользователя:{' '}
					<Code text='const user = await getUser();' />
				</p>
				<CodeBlock
					text={ExampleCodeLogin}
					fileName={ExampleCodeLoginPath.slice(4)}
					github={{ path: ExampleCodeLoginPath }}
				/>
				<CodeBlock
					text={ExampleCodeSignup}
					fileName={ExampleCodeSignupPath.slice(4)}
					github={{ path: ExampleCodeSignupPath }}
				/>
				<CodeBlock
					text={ExampleCodeLoginForm}
					fileName={ExampleCodeLoginFormPath.slice(4)}
					github={{ path: ExampleCodeLoginFormPath }}
				/>
				<CodeBlock
					text={ExampleCodeDefinitions}
					fileName={ExampleCodeDefinitionsPath.slice(4)}
					github={{ path: ExampleCodeDefinitionsPath }}
				/>
				<CodeBlock
					text={ExampleCodeLogout}
					fileName={ExampleCodeLogoutPath.slice(4)}
					github={{ path: ExampleCodeLogoutPath }}
				/>
				<CodeBlock
					text={ExampleCodeJwt}
					fileName={ExampleCodeJwtPath.slice(4)}
					github={{ path: ExampleCodeJwtPath }}
				/>
				<CodeBlock
					text={ExampleCodeSession}
					fileName={ExampleCodeSessionPath.slice(4)}
					github={{ path: ExampleCodeSessionPath }}
				/>
				<CodeBlock
					text={ExampleCodeUser}
					fileName={ExampleCodeUserPath.slice(4)}
					github={{ path: ExampleCodeUserPath }}
				/>
				<CodeBlock
					text={ExampleCodeLogoutButton}
					fileName={ExampleCodeLogoutButtonPath.slice(4)}
					github={{ path: ExampleCodeLogoutButtonPath }}
				/>
				<CodeBlock
					text={ExampleCodePrisma}
					fileName={ExampleCodePrismaPath}
					github={{ path: ExampleCodePrismaPath }}
					language='Prisma'
				/>
				<CodeBlock
					text={ExampleCodeMiddleware}
					fileName={ExampleCodeMiddlewarePath.slice(4)}
					github={{ path: ExampleCodeMiddlewarePath }}
				/>
			</div>
		</>
	);
}
