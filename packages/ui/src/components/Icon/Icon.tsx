import { iconsMap } from './Icon.list';
import { IconWrapper } from './Icon.styles';
import { type IconProps } from './Icon.types';

export const Icon = ({ icon, size, hover, ...props }: IconProps) => {
	const IconComponent = iconsMap[icon];

	return (
		<IconWrapper data-testid="Icon" hover={hover}>
			<IconComponent {...(size && { width: size, height: size })} {...props} />
		</IconWrapper>
	);
};
