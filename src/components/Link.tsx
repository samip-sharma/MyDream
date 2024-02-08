import React from "react";
import {
	GestureResponderEvent,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from "react-native";
import { borderRadius, colors } from "_styles";

const styles = StyleSheet.create({
	link: {},
	label: {
		color: colors.backgroundColorPrimary,
		justifyContent: "center",
		alignItems: "center",
	},
});

interface IProps {
	label: string;
	onPress?: (event: GestureResponderEvent) => void;
	linkStyle?: ViewStyle;
	labelStyle?: TextStyle;
}
const Link: React.FC<IProps> = ({ label, onPress, linkStyle, labelStyle }) => {
	return (
		<TouchableOpacity style={[styles.link, linkStyle]} onPress={onPress}>
			<Text style={[styles.label, labelStyle]}>{label}</Text>
		</TouchableOpacity>
	);
};

export default Link;
