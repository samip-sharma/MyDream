import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

const LoadingDots: React.FC = ({}) => {
	return <View style={[styles.container]}>Loading...</View>;
};

export default LoadingDots;
