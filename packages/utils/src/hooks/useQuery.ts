import type { IParam, ThenArg } from '@packages/global-types';
import {
	type DefinedUseQueryResult,
	type QueryFunction,
	type QueryKey,
	type UseQueryOptions,
	useQuery as useCustomQuery,
	useQueryClient
} from '@tanstack/react-query';
import { useState } from 'react';

export const useQuery = <T extends (...args: any) => any>(fn: T, options?: IConfig<T>): IReturn<T> => {
	const initialEnable = options?.enabled ?? true;
	const [enable, setEnabled] = useState(initialEnable);
	const queryClient = useQueryClient();

	const queryKey = [fn.name, options?.params].filter(Boolean);
	const queryFn: QueryFunction<ThenArg<T>, QueryKey, IParam<T>> = () => fn(options?.params);

	const defaultOptions = {
		refetchOnWindowFocus: false,
		enabled: enable,
		retry: 1,
		initialData: [],
		...options
	};

	const result = useCustomQuery({ queryKey, queryFn, ...defaultOptions });

	const invalidateQuery = (key = queryKey) => {
		queryClient.refetchQueries({ queryKey: key });
	};

	const resetQuery = (key = queryKey) => {
		queryClient.resetQueries({ queryKey: key });
	};

	const repeat = async () => {
		if (!initialEnable) await setEnabled(true);
		return invalidateQuery();
	};

	const reset = async () => {
		if (!initialEnable) await setEnabled(true);
		return resetQuery();
	};

	const setData = (newData: ThenArg<T>) => {
		queryClient.setQueryData(queryKey, newData);
	};

	const fetchCount = result.isSuccess && !result.isFetching ? 1 : 0;

	return {
		...result,
		data: result.data as ThenArg<T>,
		params: options?.params,
		invalidateQuery,
		repeat,
		reset,
		fetchCount,
		setData
	} as IReturn<T>; // Add this line to explicitly type the return value.
};

type IConfig<T extends (...args: any) => any> = {
	params?: IParam<T>;
} & UseQueryOptions;

type IReturn<T extends (...args: any) => any> = DefinedUseQueryResult<ThenArg<T>> & {
	params?: IParam<T>;
	invalidateQuery: (key?: (string | IParam<T> | undefined)[]) => void;
	repeat: () => Promise<void>;
	reset: () => Promise<void>;
	fetchCount: number;
	setData: (newData: ThenArg<T>) => void;
};

export const useCachedQuery = <T extends (...args: any) => any>(
	fn: T,
	options?: Parameters<typeof useQuery>[1]
): ReturnType<typeof useQuery> => {
	const queryClient = useQueryClient();
	const queryKey = [fn.name, options?.params].filter(Boolean);
	const cachedData = queryClient.getQueryData(queryKey);

	const defaultOptions = {
		initialData: () => cachedData || [],
		staleTime: cachedData ? 1000 * 60 * 5 : 0, // 5 minutes
		queryKey: queryKey || [], // Add this line
		...options
	};

	return useQuery<T>(fn, defaultOptions) as ReturnType<typeof useQuery>;
};

export const useClient: typeof useQueryClient = useQueryClient;
