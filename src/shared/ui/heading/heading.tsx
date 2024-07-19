import { cn } from '@/shared/lib';

interface HeadingProps {
	children: React.ReactNode;
	className?: string;
	Tag: keyof JSX.IntrinsicElements;
	id?: string;
}

export const Heading = ({
	children,
	className,
	Tag,
	id,
	...props
}: HeadingProps) => {
	// const [highlightedId, setHighlightedId] = useState(null);

	// useEffect(() => {
	// 	const handleHashChange = () => {
	// 		const hash = window.location.hash;
	// 		setHighlightedId(hash.slice(1));
	// 	};

	// 	window.addEventListener('hashchange', handleHashChange);

	// 	handleHashChange();

	// 	return () => {
	// 		window.removeEventListener('hashchange', handleHashChange);
	// 	};
	// }, []);

	return (
		<Tag
			className={cn(
				'pt-[var(--height-navbar)] -mt-[var(--height-navbar)] text-default-900',
				className,
			)}
			id={id}
			data-headline-id={id}
			{...props}
		>
			<span
				className={cn('whitespace-pre-wrap relative', {
					// 'bg-primary-400': highlightedId === id,
				})}
			>
				{children}
			</span>
		</Tag>
	);
};
