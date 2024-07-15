'use client';

import { Dictionary, i18n, Locale } from '@/shared/config';
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineLanguage } from 'react-icons/hi2';

export const LocaleSwitcher = ({ dict }: { dict: Dictionary['ui'] }) => {
	const pathname = usePathname();
	const segments = pathname.split('/');
	const isDefaultLang = !i18n.locales.includes(segments[1] as Locale);

	const redirectedPathName = (locale: Locale) => {
		if (!pathname) return '/';

		if (!i18n.locales.includes(segments[1] as Locale) && segments.length > 2) {
			segments.splice(1, 0, locale);
		} else {
			segments[1] = locale;
		}

		return segments.join('/');
	};

	return (
		<Dropdown offset={20} backdrop='opaque'>
			<DropdownTrigger>
				<Button variant='light' isIconOnly color='primary'>
					<HiOutlineLanguage size={18} />
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				selectionMode='single'
				selectedKeys={isDefaultLang ? ['ru'] : ['en']}
				disabledKeys={isDefaultLang ? ['ru'] : ['en']}
				variant='faded'
				aria-label='Dropdown menu with description'
			>
				<DropdownSection title={dict['change-lang']}>
					<DropdownItem
						startContent={'ru'}
						key='ru'
						as={Link}
						href={redirectedPathName('ru')}
					>
						{dict['lang-rus']}
					</DropdownItem>
					<DropdownItem
						startContent={'en'}
						key='en'
						as={Link}
						href={redirectedPathName('en')}
					>
						{dict['lang-eng']}
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
};
