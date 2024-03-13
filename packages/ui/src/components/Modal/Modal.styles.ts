import styled, { css } from 'styled-components';
import { responsive } from '../../styles/responsive';
import { type ModalProps, ModalSize } from './Modal.types';

const modalSizeStyles = ({ size, fadeType }: { size: ModalSize; fadeType?: string }) =>
	({
		[ModalSize.small]: css`
			width: 420px;
			min-width: 420px;
		`,
		[ModalSize.medium]: css`
			width: 460px;
			height: auto;
		`,
		[ModalSize.large]: css`
			width: 500px;
			height: auto;
		`,
		[ModalSize.sidebar]: css`
			width: 460px;
			height: 100%;
			max-height: 100%;
			padding: 60px 50px 0;
			right: 0;
			border-radius: 0;
			display: flex;
			flex-direction: column;
			transform: ${fadeType === 'in' ? 'translateX(0)' : 'translateX(460px)'};
			transition: ${['in', 'out'].includes(fadeType as string) ? 'transform 0.15s' : 'unset'};

			form {
				height: 100%;
				display: flex;
				flex-direction: column;

				button[type='submit'] {
					margin-top: auto;
				}
			}

			.title {
				span {
					font-size: 28px;
					font-weight: normal;
				}
			}
		`
	})[size];

export const ModalBackgroundStyled = styled('div').withConfig({
	shouldForwardProp: prop => !['fadeType'].includes(prop)
})<{ fadeType?: string }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10;
	background: RGBA(20, 22, 31, 0.7);
	padding: 1em;
	opacity: ${({ fadeType }) => (fadeType === 'in' ? 1 : 0)};
	transition: ${({ fadeType }) => (['in', 'out'].includes(fadeType as string) ? 'opacity 0.15s' : 'unset')};

	@media ${responsive.sm} {
		height: 100%;
		width: 100%;
		min-width: 100%;
		min-height: 100%;
	}
`;

export const ModalBody = styled('div').withConfig({
	shouldForwardProp: prop => !['fadeType', 'isOpen', 'hasCloseIcon'].includes(prop)
})<ModalProps & { fadeType?: string }>`
	@keyframes slide-animation {
		0% {
			bottom: -100%;
		}
		100% {
			bottom: 0;
		}
	}

	position: absolute;
	border-radius: 15px;
	color: ${({ theme }) => theme.DEFAULT_FONT_COLOR};
	padding: 54px 50px;
	background-color: ${({ theme }) => theme.MODAL_BG_COLOR};
	flex: 0 0 auto;
	max-height: calc(95vh - 2.5rem);
	overflow: ${({ overflow }) => overflow || 'auto'};
	transform: ${({ fadeType }) => (fadeType === 'in' ? 'scale(1)' : 'scale(0.92)')};
	transition: ${({ fadeType }) => (['in', 'out'].includes(fadeType as string) ? 'transform 0.15s' : 'unset')};

	${({ size, fadeType }) => modalSizeStyles({ size: size as ModalSize, fadeType })}

	@media ${responsive.sm} {
		height: 100%;
		min-height: 100%;
		padding: 50px 22px 48px;
		width: 100%;
		min-width: 100%;
		border-radius: 0;
		display: flex;
		flex-direction: column;

		form {
			display: flex;
			flex-direction: column;
			height: 100%;

			button.mt {
				margin-top: auto;
			}

			#form-error {
				flex: 0;
			}
		}

		${({ isMobileBottomsheet }) =>
			isMobileBottomsheet &&
			css`
				border-top-left-radius: 15px;
				border-top-right-radius: 15px;
				animation-name: slide-animation;
				animation-duration: 0.2s;
				bottom: 0;
				height: 62%;
				min-height: 62%;
				padding: 40px 22px 48px;

				.close-icon {
					display: none !important;
				}
			`}
	}
`;

export const ModalTopPanel = styled('div').withConfig({
	shouldForwardProp: prop => !['titleCenter'].includes(prop)
})<Pick<ModalProps, 'titleCenter'>>`
	display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;

	.close-icon {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 36px;
		right: 36px;
		align-self: end;
		z-index: 1;
	}

	.title {
		align-self: ${({ titleCenter }) => (titleCenter ? 'center' : 'start')};

		p,
		span {
			text-align: center;
		}
	}

	@media ${responsive.sm} {
		width: 100%;
		padding: 0;

		.close-icon {
			top: 34px;
			right: 30px;
			z-index: 1;
		}
	}
`;

export const ModalContentStyled = styled.div`
	font-size: 12px;
	flex: 1;
`;

export const ModalTitle = styled.span<Pick<ModalProps, 'subTitle'>>`
	font-size: 22px;
	text-align: center;
	color: ${({ theme }) => theme.DEFAULT_FONT_COLOR};
	font-weight: 400;
	margin-bottom: ${({ subTitle }) => (subTitle ? '10px' : '26px')};
	display: inline-flex;

	@media ${responsive.sm} {
		letter-spacing: 0.03px;
		font-size: 18px;
		color: ${({ theme }) => theme.DEFAULT_FONT_COLOR};
	}
`;

export const ModalSubTitle = styled.p`
	font-size: 16px;
	margin-top: 0;
	margin-bottom: 26px;
	color: ${({ theme }) => theme.SUBTITLE_COLOR};

	@media ${responsive.sm} {
		font-size: 12px;
		line-height: 1.17;
		color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
	}
`;
