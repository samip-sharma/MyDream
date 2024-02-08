const padding = {
	l: 32,
	m: 16,
	s: 8,
	xs: 4,
	xxs: 2,
} as const;

export default {
	...padding,
	paddingScreen: padding.m,
};
