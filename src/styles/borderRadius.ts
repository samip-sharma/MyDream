const borderRadius = {
	m: 10,
} as const;

export default {
	...borderRadius,
	buttonBorderRadiusPrimary: borderRadius.m,
	inputBorderRadiusPrimary: borderRadius.m,
};
