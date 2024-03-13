import { iconsMap } from './Icon.list';

export enum IconSize {
	Sm = 10,
	Md = 18,
	Lg = 24
}

export interface IconProps extends React.ComponentProps<'svg'> {
	icon: IconType;
	size?: IconSize;
	hover?: boolean;
}

export type IconType = keyof typeof iconsMap;
