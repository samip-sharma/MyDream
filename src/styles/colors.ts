const colors = {
	color1: "#1f1e22",
	color2: "#1c191e",
	white: "#FFFFFF",
	black: "#000000",
	lightGrey: "#F8F9FB",
	midGrey: "#A7A9B7",
} as const;

export default {
	...colors,
	textColorPrimary: colors.black,
	backgroundColorPrimary: "#a74547",
	colorButtonPrimaryActive: colors.color2,
	colorButtonPrimary: colors.white,
	backgroundColorButtonSecondary: colors.lightGrey,
	backgroundColorButtonSecondaryActive: colors.white,
	colorButtonSecondary: colors.midGrey,
	colorButtonSecondaryActive: colors.black,
	placeHolderColorInput: "#C4C4C4",
	backgroundColorLinkPrimary: "#eef0f187",
	greyText: "grey",
};
