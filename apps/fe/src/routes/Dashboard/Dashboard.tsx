import { Modal } from '@packages/ui';
import { useModal } from '@packages/utils';

export const Dashboard = () => {
	const { isOpen, closeModal, openModal } = useModal();

	return (
		<>
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '24px'
				}}
			>
				<button type="button" style={{ color: '#fff', cursor: 'pointer' }} onClick={openModal}>
					Open Modal
				</button>
			</div>

			<Modal hasCloseIcon isOpen={isOpen} title="Modal" closeModal={closeModal}>
				MODAL
			</Modal>
		</>
	);
};
