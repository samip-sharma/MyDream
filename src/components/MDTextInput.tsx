import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

interface iProps {
	keyboardType?: KeyboardTypeOptions;
}

const LoadingDots: React.FC<iProps> = ({ keyboardType = "default" }) => {
	const [text, onChangeText] = React.useState("Useless Text");
	return (
		<TextInput
			style={styles.input}
			onChangeText={onChangeText}
			value={text}
			keyboardType={keyboardType}
		/>
	);
};

export default LoadingDots;
