import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '../Icon';
import {
	ModalBackgroundStyled,
	ModalBody,
	ModalContentStyled,
	ModalSubTitle,
	ModalTitle,
	ModalTopPanel
} from './Modal.styles';
import { type ModalProps, ModalSize, TestId } from './Modal.types';

export const Modal = ({
	isOpen,
	title,
	subTitle,
	hasCloseIcon,
	size = ModalSize.medium,
	closeModal,
	children,
	overflow,
	isMobileBottomsheet,
	titleCenter = false
}: ModalProps) => {
	const [fadeType, setFadeType] = useState('');

	const handleClose = (e: React.MouseEvent) => {
		if (e) e.preventDefault();
		setFadeType('out');
		setTimeout(() => closeModal?.(e), 100);
	};

	useEffect(() => {
		const open = setTimeout(() => {
			if (isOpen) setFadeType('in');
		}, 0);

		return () => clearTimeout(open);
	}, [isOpen]);

	if (isOpen) {
		return ReactDOM.createPortal(
			<ModalBackgroundStyled data-testid={TestId.background} fadeType={fadeType} onClick={handleClose}>
				<ModalBody
					id="modal-body"
					data-testid={TestId.dialog}
					role="dialog"
					size={size}
					overflow={overflow}
					fadeType={fadeType}
					isMobileBottomsheet={isMobileBottomsheet}
					isOpen={isOpen}
					hasCloseIcon={hasCloseIcon}
					onClick={e => e.stopPropagation()}
				>
					<ModalTopPanel hidden={!title && !hasCloseIcon} titleCenter={titleCenter}>
						<span className="title">
							{title && <ModalTitle subTitle={subTitle}>{title}</ModalTitle>}
							{subTitle && <ModalSubTitle>{subTitle}</ModalSubTitle>}
						</span>
						{hasCloseIcon && (
							<div className="close-icon">
								<div data-testid={TestId.closeIcon} onClick={handleClose}>
									<Icon hover icon="XIcon" />
								</div>
							</div>
						)}
					</ModalTopPanel>
					<ModalContentStyled>{children}</ModalContentStyled>
				</ModalBody>
			</ModalBackgroundStyled>,
			document.body
		);
	}

	return null;
};
