import {
	type InitialDataFunction,
	type QueryKey,
	useQuery as useCustomQuery,
	useQueryClient
} from '@tanstack/react-query';
import { useCallback } from 'react';
import { storage } from '../utils/storage';

export const useSharedState = <T extends QueryKey, R extends InitialDataFunction<R>>(
	queryKey: T,
	initialData: R | InitialDataFunction<R> | undefined,
	persistData = false
) => {
	const queryClient = useQueryClient();
	const initData = persistData ? ((storage(JSON.stringify(queryKey)).get() ?? initialData) as R) : initialData;
	const options = { initialData: initData, staleTime: Infinity };
	const { data } = useCustomQuery<R>({ queryKey, ...options });

	const setData = useCallback(
		(newData: R) => {
			queryClient.setQueryData(queryKey, newData as any);
			if (persistData) storage(JSON.stringify(queryKey)).set(newData);
		},
		[persistData, queryClient, queryKey]
	);

	return { data, setData };
};
