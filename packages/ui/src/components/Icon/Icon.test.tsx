import { Icon } from '.';
import { renderWithTheme, screen } from '../../test-utils';

const renderComponent = () => renderWithTheme(<Icon icon="XIcon" />);

describe('Icon', () => {
	it('should render Icon', () => {
		renderComponent();
		expect(screen.getByTestId('Icon')).toBeInTheDocument();
	});
});
