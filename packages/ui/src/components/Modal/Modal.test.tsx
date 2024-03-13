import { render, screen } from '../../test-utils';
import { Modal } from './Modal';
import { TestId } from './Modal.types';

const mockCloseModal = vi.fn();

it('renders open modal', () => {
	render(<Modal isOpen closeModal={mockCloseModal} />);
	expect(screen.queryByTestId(TestId.dialog)).toBeDefined();
});

it('renders children', () => {
	render(
		<Modal isOpen closeModal={mockCloseModal}>
			Test Children
		</Modal>
	);
	expect(screen.getByText('Test Children')).toBeDefined();
});

it('renders title', () => {
	render(<Modal isOpen title="title" />);
	expect(screen.getByText('title')).toBeDefined();
});
