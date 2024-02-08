import * as yup from "yup";

const emailValidation = yup
	.string()
	.email("Please enter valid email")
	.required("Email Address is Required");

const passowrdValidation = yup
	.string()
	.min(8, ({ min }) => `Password must be at least ${min} characters`)
	.required("Password is required");

const phoneNumberValidation = yup
	.number()
	.min(10, ({ min }) => `Please provide a valid phone number`)
	.required("Phone number is Required");

export const loginValidationSchema = yup.object().shape({
	phone: phoneNumberValidation,
	password: passowrdValidation,
});
