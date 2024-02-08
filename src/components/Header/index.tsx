import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import the Ionicons library for icons
import SearchBar from "../SearchBar";
import LocationChanger from "./LocationChanger";
import Notification from "./Notification";
import Profile from "./Profile";
import { useBottomSheetDispatch } from "_context";
import { useRootNavigation } from "_hooks";
import { LocationChangerForm } from "_components";

const Header = () => {
	const navigation = useRootNavigation();
	const { open: openBottomSheet } = useBottomSheetDispatch();
	return (
		<View style={styles.container}>
			<View style={styles.locationSubMenu}>
				<TouchableOpacity
					onPress={() => {
						openBottomSheet({
							child: <LocationChangerForm />,
							snapPoints: [0, "40%"],
						});
					}}
				>
					<LocationChanger currentLocation="USA"></LocationChanger>
				</TouchableOpacity>
				<View style={styles.subMenu}>
					<TouchableOpacity onPress={() => navigation.navigate("Notification")}>
						<Notification count={3} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
						<Profile />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.searchMenu}>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
					style={styles.button}
				>
					{navigation.canGoBack() && (
						<Ionicons name="arrow-back" size={24} color="black" />
					)}
				</TouchableOpacity>
				<SearchBar onSearch={() => {}} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { padding: 0 },
	locationSubMenu: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "white",
		zIndex: 5,
		paddingLeft: 10,
	},
	subMenu: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	searchMenu: {
		flexDirection: "row",
		backgroundColor: "#fff",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		borderColor: "grey",
		borderWidth: 0.3,
		padding: 3,
	},
});

export default Header;
