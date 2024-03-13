import { Row } from './Row';
import { TableComp, TableContainer } from './Table.styles';
import { type TableProps } from './Table.types';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

export const Table = <T extends Record<string, any>>({
	renderHeader,
	renderBody,
	overflow,
	headers = [],
	data = [],
	showHeader = true,
	onClick = () => {},
	hoverable = true
}: TableProps<T>) => (
	<TableContainer overflow={overflow} className="table-container">
		<TableComp hoverable={hoverable}>
			{showHeader && headers && headers.length > 0 && (
				<thead>
					{renderHeader ? (
						headers.map((header, index) => (
							<Row key={`header-${header.title}`} item={header} index={index}>
								{renderHeader(header)}
							</Row>
						))
					) : (
						<TableHeader headers={headers} />
					)}
				</thead>
			)}

			{data && data.length > 0 && (
				<tbody>
					{renderBody ? (
						data.map((item, index) => (
							<Row<T> key={item.name} item={item} index={index} onClick={onClick}>
								{renderBody(item, index)}
							</Row>
						))
					) : (
						<TableBody<T> data={data} onClick={onClick} />
					)}
				</tbody>
			)}
		</TableComp>
	</TableContainer>
);
