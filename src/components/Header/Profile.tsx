import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const Profile = () => {
	return (
		<View style={styles.iconContainer}>
			<Image
				style={styles.profileImage}
				source={{ uri: "https://picsum.photos/200" }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	iconContainer: {
		position: "relative",
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: "white",
		marginHorizontal: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	profileImage: {
		width: 32,
		height: 32,
		borderRadius: 16,
	},
});

export default Profile;
