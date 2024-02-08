import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../PrimaryButton";

interface RegisterFormValues {
	name: string;
	email: string;
	phoneNumber: string;
	password: string;
}

const RegisterForm: React.FC = () => {
	const initialValues: RegisterFormValues = {
		name: "",
		email: "",
		phoneNumber: "",
		password: "",
	};

	const registerSchema = Yup.object().shape({
		name: Yup.string().required("Name is requirerd"),
		email: Yup.string().required("Email is required").email("Invalid email"),
		phoneNumber: Yup.string(),
		password: Yup.string()
			.required("Password is required")
			.min(6, "Password must be at least 6 characters"),
	});

	const handleRegister = (values: RegisterFormValues) => {
		// Handle registration logic here
		console.log(values);
	};

	return (
		<View style={styles.container}>
			<Formik
				initialValues={initialValues}
				validationSchema={registerSchema}
				onSubmit={handleRegister}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
					<>
						<TextInput
							style={styles.input}
							placeholder="Name"
							onChangeText={handleChange("name")}
							onBlur={handleBlur("name")}
							value={values.name}
						/>
						{errors.name && <Text style={styles.error}>{errors.name}</Text>}

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
							placeholder="Phone Number"
							onChangeText={handleChange("phoneNumber")}
							onBlur={handleBlur("phoneNumber")}
							value={values.phoneNumber}
						/>
						{errors.phoneNumber && (
							<Text style={styles.error}>{errors.phoneNumber}</Text>
						)}

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
							label="Register"
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

export default RegisterForm;
