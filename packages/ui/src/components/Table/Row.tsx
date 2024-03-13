import { TR } from './Table.styles';
import { type TableProps } from './Table.types';

export const Row = <T extends Record<string, any>>({ children, onClick, item, index = 0 }: Props<T>) => (
	<TR onClick={() => onClick?.(item as T, index)}>{children}</TR>
);

interface Props<T extends Record<string, any>> extends Pick<TableProps<T>, 'onClick'> {
	item?: T;
	index?: number;
	children: React.ReactNode;
}
