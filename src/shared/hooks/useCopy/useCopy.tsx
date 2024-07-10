import { useState } from 'react';
import { useMessage } from '../useMessage/useMessage';

export const useCopy = () => {
	const { showMessage } = useMessage();
	const [copied, setCopied] = useState(false);

	const handleCopy = (text: string) => {
		if (copied) {
			return;
		}

		try {
			navigator.clipboard.writeText(text);
			showMessage({
				content: 'Copied to clipboard!',
				type: 'success',
			});
		} catch (err) {
			showMessage({
				content: 'Failed to copy!',
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
