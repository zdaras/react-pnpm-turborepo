import { TH } from './Table.styles';
import type { Column } from './Table.types';

export const HeaderCell = ({ align, width, children }: HeaderCellProps) => (
	<TH align={align} width={width}>
		{children}
	</TH>
);

export interface HeaderCellProps {
	align?: 'left' | 'right' | 'center';
	width?: string;
	filler?: boolean;
	header?: Column;
	children?: React.ReactNode;
}
