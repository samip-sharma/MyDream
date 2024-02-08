import React from "react";
import {
	StyleSheet,
	ViewStyle,
	TextStyle,
	TouchableOpacity,
	Text,
	TouchableOpacityProps,
	StyleProp,
} from "react-native";
import { borderRadius, colors, fontSize } from "_styles";

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.backgroundColorPrimary,
		alignSelf: "center",
		paddingHorizontal: 40,
		paddingVertical: 10,
		borderRadius: borderRadius.buttonBorderRadiusPrimary,
	},
	label: {
		color: colors.colorButtonPrimary,
		fontSize: fontSize.buttonFont,
		fontWeight: "700",
		textAlign: "center",
	},
});

interface IProps extends Omit<TouchableOpacityProps, "style"> {
	label: string;
	buttonStyle?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
	stretch?: boolean;
}

const PrimaryButton: React.FC<IProps> = ({
	label,
	buttonStyle,
	labelStyle,
	stretch = false,
	...rest
}) => {
	return (
		<TouchableOpacity
			style={[styles.button, stretch && { alignSelf: "stretch" }, buttonStyle]}
			{...rest}
		>
			<Text style={[styles.label, labelStyle]}>{label}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
