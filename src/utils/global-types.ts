export type Theme = 'light' | 'dark';

export type Icon = {
	name: string;
	width: number;
	height: number;
	onClick?: () => void;
};