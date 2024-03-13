import { TableProps } from './Table.types';
import { HeaderCell, Row } from './index';

export const TableHeader = ({ headers }: Props) => (
	<Row>
		{headers?.map(header => (
			<HeaderCell key={header.title} header={header} align={header.align}>
				{header.title}
			</HeaderCell>
		))}
	</Row>
);

export type Props = Pick<TableProps, 'headers'>;
