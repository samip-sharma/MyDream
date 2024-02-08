import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "_styles";

type CardProps = {
	imageUri?: string;
	title: string;
	description: string;
	price: number;
};

const Card: React.FC<CardProps> = ({ imageUri, title, description, price }) => {
	return (
		<View style={styles.card}>
			{!!imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
				<Text style={styles.price}>${price.toFixed(2)}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		margin: 5,
		flexDirection: "row",
		backgroundColor: "white",
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 1,
			height: 5,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
		height: 120,
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 8,
	},
	textContainer: {
		flex: 1,
		padding: 16,
	},
	title: {
		fontSize: 15,
		fontWeight: "500",
		marginBottom: 8,
	},
	description: {
		fontSize: 12,
		marginBottom: 8,
		color: colors.greyText,
	},
	price: {
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Card;
