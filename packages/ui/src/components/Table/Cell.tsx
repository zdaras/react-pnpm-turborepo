import { TD } from './Table.styles';

export const Cell = ({ align, width, children, onClick, className }: CellProps) => (
	<TD align={align} width={width} className={className} onClick={onClick}>
		{children}
	</TD>
);

export interface CellProps {
	align?: 'left' | 'right' | 'center';
	width?: string;
	onClick?: () => any;
	className?: string;
	children?: React.ReactNode;
}
