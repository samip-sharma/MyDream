import React from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import { PickerIOS, Picker } from "@react-native-community/picker";
import { colors } from "_styles";
import { BlurView } from "expo-blur";

const styles = StyleSheet.create({
	button: {
		borderColor: "grey",
		borderWidth: 1,
		flexDirection: "row",
		padding: 6,
		paddingLeft: 10,
		alignItems: "center",
	},
	buttonLabel: {
		fontSize: 16,
		fontWeight: "normal",
	},
	buttonSymbol: {
		marginLeft: "auto",
		fontSize: 22,
	},
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
	},
	innerContainer: {},
	header: {
		flexDirection: "row",
		backgroundColor: "grey",
	},
	doneButton: {
		padding: 10,
		marginLeft: "auto",
	},
	done: {
		color: colors.white,
		fontSize: 15,
		fontWeight: "600",
	},
	pickerItemStyle: {
		color: colors.white,
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
	onBlur,
	defaultLabel = "Please select",
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen((isOpen) => !isOpen);
	const close = () => {
		setIsOpen(false);
		onBlur();
	};
	const selectedOption = options.find((option) => option.value === value);
	return (
		<>
			<TouchableOpacity
				accessibilityRole="combobox"
				accessibilityLabel={defaultLabel}
				style={styles.button}
				onPress={toggle}
			>
				<Text style={styles.buttonLabel}>
					{selectedOption?.label ?? defaultLabel}
				</Text>
				<Text style={styles.buttonSymbol}>
					{isOpen ? <Text>&#9652;</Text> : <Text>&#9662;</Text>}
				</Text>
			</TouchableOpacity>
			<Modal visible={isOpen} transparent={true}>
				<View style={styles.modalContainer}>
					<View style={styles.innerContainer}>
						<View style={styles.header}>
							<TouchableOpacity style={styles.doneButton} onPress={close}>
								<Text style={styles.done}>Done</Text>
							</TouchableOpacity>
						</View>
						<BlurView intensity={100} tint="dark">
							<PickerIOS
								itemStyle={styles.pickerItemStyle}
								onValueChange={(itemValue) => onChange(itemValue as string)}
								selectedValue={value}
							>
								<Picker.Item label={defaultLabel} value="" key="" />
								{options.map((option) => (
									<Picker.Item {...option} key={option.value} />
								))}
							</PickerIOS>
						</BlurView>
					</View>
				</View>
			</Modal>
		</>
	);
};

export default MDPickerInputIOS;
