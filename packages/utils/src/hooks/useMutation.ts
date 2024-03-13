import type { IParam, ThenArg } from '@packages/global-types';
import { type UseMutationOptions, useMutation as useCustomMutation } from '@tanstack/react-query';
import { useFormError } from './useFormError';

export const useMutation = <T extends (...args: any) => any>(fn: T, options?: Options): ReturnType<T> => {
	const { formError } = useFormError();
	const mutation = useCustomMutation<ThenArg<T>, Error, IParam<T>>({
		mutationFn: fn,
		...options
	});
	const err = mutation.error ?? formError;

	return { ...mutation, data: mutation.data as ThenArg<T>, error: err } as ReturnType<T>;
};

type Options = Omit<UseMutationOptions, 'mutationFn'>;
