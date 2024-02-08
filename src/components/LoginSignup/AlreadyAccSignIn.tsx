import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "_styles";

const CreateAccountComponent: React.FC = ({}) => {
	const navigation = useNavigation();
	const onSignInPress = () => {
		navigation.navigate("Login");
	};
	return (
		<View>
			<Text style={styles.greyText}>
				Already have an account?{" "}
				<Text onPress={onSignInPress} style={styles.signInLink}>
					Sign In
				</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	greyText: {
		fontSize: 12,
		color: colors.greyText,
		marginTop: 24,
	},
	signInLink: {
		color: colors.backgroundColorPrimary,
	},
});

export default CreateAccountComponent;
