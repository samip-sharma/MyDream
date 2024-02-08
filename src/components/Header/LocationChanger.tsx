import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "_styles";
import { Entypo } from "@expo/vector-icons";
interface LocationChangerProps {
	currentLocation: string;
}

const LocationChanger: React.FC<LocationChangerProps> = ({
	currentLocation = "NY, USA",
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.yourLocation}>Your Location</Text>
			<View style={styles.currentLocation}>
				<Ionicons name="location-sharp" size={10} color="black" />
				<Text> {currentLocation}</Text>
				<Entypo name="chevron-small-down" size={20} color="black" />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	yourLocation: { color: colors.greyText, fontSize: 12 },
	currentLocation: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default LocationChanger;
