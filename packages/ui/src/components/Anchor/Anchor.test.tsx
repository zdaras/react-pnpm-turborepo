import { render, screen } from '../../test-utils';
import { Anchor } from './Anchor';

describe('Anchor', () => {
	it('renders anchor element with correct props', () => {
		render(<Anchor href="https://example.com">Link Text</Anchor>);
		const anchorElement = screen.getByText('Link Text');
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).toHaveAttribute('href', 'https://example.com');
		expect(anchorElement).toHaveAttribute('rel', 'noreferrer');
		expect(anchorElement).toHaveAttribute('target', '_blank');
	});

	it('renders anchor element with text prop', () => {
		render(<Anchor text="Link Text" />);
		const anchorElement = screen.getByText('Link Text');
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).not.toHaveAttribute('href');
		expect(anchorElement).toHaveAttribute('rel', 'noreferrer');
		expect(anchorElement).toHaveAttribute('target', '_blank');
	});

	it('renders anchor element with children prop', () => {
		render(<Anchor>Link Text</Anchor>);
		const anchorElement = screen.getByText('Link Text');
		expect(anchorElement).toBeInTheDocument();
		expect(anchorElement).not.toHaveAttribute('href');
		expect(anchorElement).toHaveAttribute('rel', 'noreferrer');
		expect(anchorElement).toHaveAttribute('target', '_blank');
	});
});
