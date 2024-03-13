export enum ModalSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
	sidebar = 'sidebar'
}

export interface ModalProps {
	size?: ModalSize;
	isOpen: boolean;
	title?: React.ReactNode;
	subTitle?: React.ReactNode;
	hasCloseIcon?: boolean;
	closeModal?: (e: React.SyntheticEvent) => void;
	children?: React.ReactNode;
	overflow?: string;
	isMobileBottomsheet?: boolean;
	titleCenter?: boolean;
}

export enum TestId {
	background = 'background',
	closeIcon = 'close-icon',
	dialog = 'dialog'
}
