import styled, { css } from 'styled-components';
import { responsive } from '../../styles/responsive';
import { type CellProps } from './Cell';
import { TABLE_HEIGHT } from './Table.const';
import { type TableProps } from './Table.types';

export const TableComp = styled.table<TableProps>`
	border-collapse: collapse;
	width: 100%;
	border-spacing: 0;

	thead tr, tbody tr {
		th:nth-last-child(-n + 2) {
			text-align: right;
		}

		td:nth-last-child(-n + 2) {
			text-align: right;
		}
	}

	tbody tr {
		:not(:first-child) {
			td {
				border-top: ${({ theme }) => `1px solid ${theme.TABLE_BORDER_COLOR}`};
			}

			td:first-child,
			td:last-child {
				border-top: 1px solid transparent;
				border-top-color: transparent !important;
			}
		}
	}

	tbody:before {
		line-height: 8px;
		content: '_';
		color: transparent;
		display: block;
	}

	${props =>
		props.hoverable &&
		css`
			tbody tr:hover {
				background-color: ${({ theme }) => theme.TABLE_ROW_HOVER};
				border-top-color: transparent;
				cursor: pointer;

				& + tr {
					td {
						border-top-color: transparent;
					}
				}
			}
		`};

	@media ${responsive.lp} {
		tbody:before {
			line-height: 4px;
		}
	}
`;

export const TableContainer = styled.div<{ overflow?: string }>`
	overflow: ${props => props.overflow || 'hidden'};
	position: relative;
	flex: 1 1 100%;
	overflow-x: ${props => (props.overflow ? 'unset' : 'auto')};
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const TD = styled.td<CellProps>`
	display: table-cell;
	width: ${({ width }) => (width ? `${width} !important` : 'auto')};
	font-style: normal;
	font-stretch: normal;
	color: ${({ theme }) => theme.DEFAULT_FONT_COLOR};
	font-size: 14px;
	letter-spacing: 0.02px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	height: ${TABLE_HEIGHT.FULL_HD.ROW};
	transition: 0.2s ease-in-out;
	padding: 6px 12px;
	text-align: left;

	&:first-child {
		border-radius: 5px 0 0 5px;
	}

	&:last-child {
		border-radius: 0 5px 5px 0;
	}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`};

	@media ${responsive.lp} {
		height: ${TABLE_HEIGHT.LAPTOP.ROW};
	}
`;

export const TH = styled.th<CellProps>`
	width: ${({ width }) => (width ? `${width} !important` : 'auto')};
	font-family: ${({ theme }) => theme.SECONDARY_FONT};
	color: ${({ theme }) => theme.TABLE_HEADER_COLOR};
	background-color: ${({ theme }) => theme.TABLE_HEADER_BG_COLOR};
	transition: all 0.2s;
	border-bottom: 0;
	padding: 6px 12px;
	font-size: 12px;
	height: ${TABLE_HEIGHT.FULL_HD.HEADER};
	font-weight: 500;
	position: sticky;
	top: 0px;
	z-index: 1;
	text-align: left;

	&:first-child {
		border-radius: 2px 0 0 2px;
	}

	&:last-child {
		border-radius: 0 2px 2px 0;
	}

	${({ align }) =>
		align &&
		css`
			text-align: ${align};
		`};
`;

export const TR = styled.tr`
	transition: 0.2s ease-in-out;
`;
