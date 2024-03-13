export type Column = {
	title?: string;
	className?: string;
	selector?: string;
	align?: 'left' | 'right' | 'center';
};

export interface TableProps<T extends Record<string, any> = Record<string, any>> {
	headers?: Column[];
	data?: T[];
	showHeader?: boolean;
	onClick?: (item: T, index: number) => any | Promise<any>;
	renderHeader?: (header: Column) => JSX.Element;
	renderBody?: (item: T, index: number) => JSX.Element;
	hoverable?: boolean;
	overflow?: string;
}
