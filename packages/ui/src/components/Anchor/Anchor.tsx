import { AnchorStyled } from './Anchor.styles';

export const Anchor = ({ children, text, ...props }: Props) => (
	<AnchorStyled rel="noreferrer" target="_blank" {...props}>
		{text || children}
	</AnchorStyled>
);

type Props = React.ComponentProps<'a'> & {
	text?: React.ReactNode;
	children?: React.ReactNode;
};
