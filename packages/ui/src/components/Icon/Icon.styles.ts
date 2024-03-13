import styled, { css } from 'styled-components';
import { IconProps } from './Icon.types';

export const IconWrapper = styled.span<Pick<IconProps, 'hover'>>`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	${({ hover }) =>
		hover &&
		css`
			cursor: pointer;
		`};

	svg.active {
		path {
			fill: ${({ theme }) => theme.SVG_FILL_ACTIVE};
			stroke: transparent;
		}
	}
`;
