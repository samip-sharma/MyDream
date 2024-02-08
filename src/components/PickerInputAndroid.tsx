import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import { colors } from "_styles";

type PickerProps = ConstructorParameters<typeof Picker>[0];

const styles = StyleSheet.create({
	button: {
		borderColor: "grey",
		borderWidth: 1,
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

const MDPickerInputIOS: React.FC<IProps> = ({
	options,
	value,
	onChange,
	defaultLabel = "Please select",
}) => {
	const _onValueChange: PickerProps["onValueChange"] = (itemValue) => {
		onChange(itemValue as string);
	};

	// Unable to handle onBlur event for this component. The Picker component doesn't accept and event handlers.
	return (
		<View style={styles.button}>
			<Picker onValueChange={_onValueChange} selectedValue={value}>
				<Picker.Item label={defaultLabel} value="" key="" />
				{options.map((option) => (
					<Picker.Item {...option} key={option.value} />
				))}
			</Picker>
		</View>
	);
};

export default MDPickerInputIOS;
