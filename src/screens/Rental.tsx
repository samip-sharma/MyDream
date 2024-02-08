import React from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";
import { Card } from "_components";
import Screen from "_components/Screen";
import { HomeType } from "_types";

// Rental property interface for property data
interface RentalProperty {
	id: number;
	title: string;
	category: string;
	image: string;
	type: HomeType;
}

// List of rental properties data
const rentalProperties: RentalProperty[] = [
	{
		id: 1,
		title: "Cozy Single Room in the Heart of Kathmandu",
		category: "Rent",
		image: "https://source.unsplash.com/random/300x300",
		type: "Single Room",
	},
	{
		id: 2,
		title: "Spacious Apartment with Mountain View",
		category: "Rent",
		image: "https://source.unsplash.com/random/300x300",
		type: "Appartment",
	},
	{
		id: 3,
		title: "Fully Furnished Shared Room near the Airport",
		category: "Rent",
		image: "https://source.unsplash.com/random/300x300",
		type: "Shared Room",
	},
	{
		id: 4,
		title: "Beautiful House for Sale in Pokhara",
		category: "Sale",
		image: "https://source.unsplash.com/random/300x300",
		type: "House",
	},
];

const RentalPropertyList: React.FC = () => {
	const renderItem = (item: RentalProperty, i: number) => {
		return (
			<View style={styles.propertyContainer} key={`rental-${i}`}>
				<Card
					imageUri={item.image}
					title={item.title}
					description="Product Description"
					price={9.99}
				/>
			</View>
		);
	};

	return (
		<Screen>
			<View style={styles.container}>
				{rentalProperties.map((item, i) => renderItem(item, i))}
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	propertyContainer: {},
	propertyImage: {
		width: "100%",
		height: 200,
		borderRadius: 8,
		marginBottom: 8,
	},
	propertyTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4,
	},
	propertyCategory: {
		fontSize: 14,
		color: "#666",
	},
});

export default RentalPropertyList;
