{
	/* {Platform.OS === 'ios' ? (
										<PickerInputIOS
											options={[{ label: 'test', value: 'testvalue' }]}
											value={'designerFilter'}
											onChange={onChange}
											onBlur={() => {
												console.log('blurred');
											}}
											defaultLabel={'Please select'}
										/>
									) : (
										<PickerInputAndroid
											options={[{ label: 'test', value: 'testvalue' }]}
											value={'genderFilter'}
											onChange={onChange}
											onBlur={() => {
												console.log('blurred');
											}}
											defaultLabel={'Please select'}
										/>
									)} */
}

import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import PickerInputAndroid from "./PickerInputAndroid";
import PickerInputIOS from "./PickerInputIOS";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

interface IProps {
	options: {
		label: string;
		value: string;
	}[];
	value: string;
	onChange: (value: string) => void;
	onBlur: () => void;
	defaultLabel?: string;
}

const Picker: React.FC<IProps> = ({
	options,
	value,
	onChange,
	onBlur,
	defaultLabel = "Please select",
}) => {
	return (
		<>
			{Platform.OS === "ios" ? (
				<PickerInputIOS
					options={options}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					defaultLabel={defaultLabel}
				/>
			) : (
				<PickerInputAndroid
					options={options}
					value={value}
					onChange={onChange}
					onBlur={() => {
						console.log("blurred");
					}}
					defaultLabel={defaultLabel}
				/>
			)}
		</>
	);
};

export default Picker;
