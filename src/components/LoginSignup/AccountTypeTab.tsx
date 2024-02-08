import React from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../PrimaryButton";
import { borderRadius, colors, padding } from "_styles";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.backgroundColorButtonSecondary,
		padding: padding.xs,
		borderRadius: borderRadius.buttonBorderRadiusPrimary,
	},
	activeButtonStyle: {
		backgroundColor: colors.backgroundColorButtonSecondaryActive,
	},
	buttonStyle: { backgroundColor: colors.backgroundColorButtonSecondary },
	labelStyle: { color: colors.colorButtonSecondary },
	activeLabelStyle: { color: colors.colorButtonSecondaryActive },
});

const AccountTypeTab: React.FC = ({}) => {
	const [activeTab, setActiveTab] = React.useState<"Personal" | "Business">(
		"Personal"
	);
	return (
		<View style={styles.container}>
			<PrimaryButton
				onPress={() => setActiveTab("Personal")}
				label="Personal"
				buttonStyle={
					activeTab === "Personal"
						? styles.activeButtonStyle
						: styles.buttonStyle
				}
				labelStyle={
					activeTab === "Personal" ? styles.activeLabelStyle : styles.labelStyle
				}
				stretch
			/>
			<PrimaryButton
				onPress={() => setActiveTab("Business")}
				label="Business"
				buttonStyle={
					activeTab === "Business"
						? styles.activeButtonStyle
						: styles.buttonStyle
				}
				labelStyle={
					activeTab === "Business" ? styles.activeLabelStyle : styles.labelStyle
				}
				stretch
			/>
		</View>
	);
};

export default AccountTypeTab;
