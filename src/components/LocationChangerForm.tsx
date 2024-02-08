import { Formik, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import { TextInput, Button, Text, StyleSheet } from "react-native";
import { Picker } from "_components";
import PrimaryButton from "./PrimaryButton";
import { useBottomSheetDispatch } from "_context";

interface FormValues {
	city: string;
	zip: string;
	country: string;
}

const initialValues: FormValues = {
	city: "",
	zip: "",
	country: "",
};

const validationSchema = Yup.object().shape({
	city: Yup.string().required("City is required"),
	zip: Yup.string().required("Zip is required"),
	country: Yup.string().required("Country is required"),
});

const countries = ["USA", "Canada", "Mexico", "Brazil", "Argentina"];

const contriesPicker = countries.map((coun) => {
	return { label: coun, value: coun };
});

const LocationChanger = () => {
	const { close: closeBottomSheet } = useBottomSheetDispatch();
	const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
		console.log(values);
		actions.setSubmitting(false);
		closeBottomSheet();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({
				handleSubmit,
				errors,
				touched,
				handleChange,
				values,
				handleBlur,
			}: FormikProps<FormValues>) => (
				<>
					<TextInput
						onChangeText={handleChange("city")}
						onBlur={handleBlur("city")}
						value={values.city}
						placeholder="City"
						style={styles.input}
					/>
					{touched.city && errors.city && (
						<Text style={styles.error}>{errors.city}</Text>
					)}
					<TextInput
						onChangeText={handleChange("zip")}
						onBlur={handleBlur("zip")}
						value={values.zip}
						placeholder="Zip"
						style={styles.input}
					/>
					{touched.zip && errors.zip && (
						<Text style={styles.error}>{errors.zip}</Text>
					)}
					<Picker
						onChange={handleChange("country")}
						value={values.country}
						options={contriesPicker}
						defaultLabel="Select Country"
						onBlur={() => {
							console.log("onBlur");
						}}
					/>

					{touched.country && errors.country && (
						<Text style={styles.error}>{errors.country}</Text>
					)}
					<PrimaryButton
						buttonStyle={{ marginTop: 20 }}
						stretch
						label="Change Address"
						onPress={() => handleSubmit()}
					/>
				</>
			)}
		</Formik>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "grey",
		padding: 10,
		marginBottom: 10,
	},
	error: {
		color: "red",
	},
});

export default LocationChanger;
