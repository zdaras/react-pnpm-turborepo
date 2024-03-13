declare type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

declare type DistributiveOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never;

declare type DistributivePick<T, K extends keyof T> = T extends unknown ? Pick<T, K> : never;

export type IParam<T extends (...args: any) => any> = Parameters<T>[0];

export type ThenArg<T> = T extends Promise<infer U> ? U : T extends (...args: any[]) => Promise<infer U> ? U : T;

declare global {
	type FC<Props = Record<string, any>> = React.FunctionComponent<Props & { children?: JSX.Element | React.ReactNode }>;
}
