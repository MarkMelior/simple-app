import { useDictionary } from '@/shared/config';
import { useState } from 'react';
import { useMessage } from '../useMessage/useMessage';

export const useCopy = () => {
	const { showMessage } = useMessage();
	const [copied, setCopied] = useState(false);
	const dict = useDictionary();

	const handleCopy = (text: string) => {
		if (copied) {
			return;
		}

		try {
			navigator.clipboard.writeText(text);

			dict?.ui &&
				showMessage({
					content: dict.ui['copy-success'],
					type: 'success',
				});
		} catch (err) {
			dict?.ui &&
				showMessage({
					content: dict.ui['copy-error'],
					type: 'error',
				});
		}

		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 2500);
	};

	return { handleCopy, copied };
};
