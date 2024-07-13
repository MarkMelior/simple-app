'use server';

import { getLang } from '@/shared/config';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';

interface LinkProps extends NextLinkProps {
	children: React.ReactNode;
}

// todo
export const Link: FC<LinkProps> = async ({ children, href, ...props }) => {
	const lang = await getLang();

	return (
		<NextLink {...props} href={`/${lang}/${href}`}>
			{children}
		</NextLink>
	);
};

// * client render
// export const Link: FC<LinkProps & { children: React.ReactNode }> = ({
// 	children,
// 	href,
// 	...props
// }) => {
// 	const [lang, setLang] = useState<string | null>(null);

// 	useEffect(() => {
// 		const fetchLang = async () => {
// 			const fetchedLang = await getLang();
// 			setLang(fetchedLang);
// 		};

// 		fetchLang();
// 	}, []);

// 	if (lang === null) {
// 		// Вы можете вернуть индикатор загрузки или ничего не рендерить, пока язык не загружен
// 		return null;
// 	}

// 	return (
// 		<NextLink {...props} href={`/${lang}/${href}`}>
// 			{children}
// 		</NextLink>
// 	);
// };
