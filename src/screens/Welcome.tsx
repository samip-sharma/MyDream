import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import AlreadyAccSignIn from "../components/LoginSignup/AlreadyAccSignIn";
import { useUserDispatch } from "_context";
import { colors } from "_styles";
import { useRootNavigation } from "_hooks";

const CreateAccountComponent: React.FC = () => {
	const { setUserData } = useUserDispatch();
	const { navigate } = useRootNavigation();

	const onRegisterPress = () => {
		navigate("Register");
	};

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Text>logo</Text>
				<Text style={styles.title}>mydream</Text>
			</View>
			<Text style={styles.description}>
				"Batowa" - the ultimate app for Creating your dream life. Why search for
				goals and passition we are human beings lets create out dream and life
				the way we want it.
			</Text>
			<PrimaryButton stretch label="Create Account" onPress={onRegisterPress} />
			<Text style={styles.signInContainer}>
				<AlreadyAccSignIn />
			</Text>
			<Text
				style={styles.greyText}
				onPress={() => {
					navigate("HomeScreen");
				}}
			>
				Continue as guest
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 16,
		backgroundColor: "white",
	},
	logoContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: { fontWeight: "bold", fontSize: 20 },
	logo: {},
	description: {
		fontSize: 12,
		fontWeight: "500",
		marginBottom: 40,
		textAlign: "center",
	},
	greyText: {
		fontSize: 12,
		color: "grey",
		marginTop: 24,
	},
	signInContainer: {
		flexDirection: "row",
		marginTop: 15,
	},
});

export default CreateAccountComponent;
