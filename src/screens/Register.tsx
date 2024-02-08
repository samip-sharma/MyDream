import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
	AccountTypeTab,
	AlreadyAccSignIn,
	Link,
	LoginForm,
	RegisterForm,
} from "_components";
import { padding } from "_styles";

const styles = StyleSheet.create({
	forgotPassword: {
		alignSelf: "flex-end",
		fontSize: 10,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 20,
		fontSize: 20,
	},
});

const Register: React.FC = () => {
	return (
		<View
			style={{
				paddingHorizontal: padding.paddingScreen,
				marginTop: 60,
			}}
		>
			<Text style={styles.title}>
				<Text>logo</Text> Sign Up
			</Text>
			<RegisterForm />
			<AlreadyAccSignIn />
		</View>
	);
};

export default Register;
