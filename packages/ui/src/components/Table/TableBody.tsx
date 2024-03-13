import { type TableProps } from './Table.types';
import { Cell, Row } from './index';

export const TableBody = <T extends Record<string, any>>({ data = [], onClick }: Props<T>) => (
	<>
		{data.map((item, index) => (
			<Row key={`data-row-${index}`} item={item} index={index} onClick={onClick}>
				{Object.values(item).map(value => (
					<Cell key={`data-cell-${value}`}>{value}</Cell>
				))}
			</Row>
		))}
	</>
);

type Props<T extends Record<string, any>> = Pick<TableProps<T>, 'data' | 'onClick'>;
