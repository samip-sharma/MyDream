import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../PrimaryButton";

interface LoginFormValues {
	email: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const initialValues: LoginFormValues = { email: "", password: "" };

	const loginSchema = Yup.object().shape({
		email: Yup.string().required("Email is required").email("Invalid email"),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters"),
	});

	const handleLogin = (values: LoginFormValues) => {
		// Handle login logic here
		console.log(values);
	};

	return (
		<View style={styles.container}>
			<Formik
				initialValues={initialValues}
				validationSchema={loginSchema}
				onSubmit={handleLogin}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
					<>
						<TextInput
							style={styles.input}
							placeholder="Email"
							onChangeText={handleChange("email")}
							onBlur={handleBlur("email")}
							value={values.email}
						/>
						{errors.email && <Text style={styles.error}>{errors.email}</Text>}

						<TextInput
							style={styles.input}
							placeholder="Password"
							secureTextEntry
							onChangeText={handleChange("password")}
							onBlur={handleBlur("password")}
							value={values.password}
						/>
						{errors.password && (
							<Text style={styles.error}>{errors.password}</Text>
						)}
						<PrimaryButton
							stretch
							label="Login"
							onPress={() => handleSubmit()}
						/>
					</>
				)}
			</Formik>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 4,
		marginBottom: 8,
		paddingLeft: 8,
	},
	error: {
		color: "red",
		marginBottom: 8,
	},
});

export default LoginForm;
