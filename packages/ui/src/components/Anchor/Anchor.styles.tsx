import styled from 'styled-components';

export const AnchorStyled = styled.a`
	cursor: pointer;
	background-color: transparent;
	outline: none;
	text-decoration: none;
	transition: all 0.2s ease-in-out;
	display: inline-block;
	font-family: ${({ theme }) => theme.DEFAULT_FONT};
	color: ${({ theme }) => theme.SECONDARY_COLOR};
`;
