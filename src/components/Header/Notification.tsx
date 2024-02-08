import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

type NotificationProps = {
	count: number;
};

const Notification: React.FC<NotificationProps> = ({ count }) => {
	return (
		<View style={styles.iconContainer}>
			<Feather name="bell" size={24} color="black" />
			{count > 0 && (
				<View style={styles.badge}>
					<Text>{count}</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		position: "relative",
		width: 32,
		height: 32,
		borderRadius: 24,
		backgroundColor: "white",
		marginHorizontal: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	badge: {
		position: "absolute",
		top: -4,
		right: -7,
		width: 16,
		height: 16,
		borderRadius: 8,
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Notification;
