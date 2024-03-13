import { useCallback, useState } from 'react';

const initialError = {
	error: '',
	status: undefined,
	params: undefined
};

export const useFormError = () => {
	const [formError, setErr] = useState(initialError);

	const setFormError = useCallback((error: any = initialError) => {
		setErr(error);
	}, []);

	return { formError, setFormError };
};
