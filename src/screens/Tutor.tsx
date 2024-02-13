import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Screen from "_components/Screen";

// Event interface for event data
interface Event {
	id: number;
	title: string;
	location: string;
	date: string;
}

// List of events data
const events: Event[] = [
	{ id: 1, title: "Event 1", location: "Location 1", date: "April 15, 2023" },
	{ id: 2, title: "Event 2", location: "Location 2", date: "April 16, 2023" },
	{ id: 3, title: "Event 3", location: "Location 3", date: "April 17, 2023" },
	{ id: 4, title: "Event 4", location: "Location 4", date: "April 18, 2023" },
	{ id: 5, title: "Event 5", location: "Location 5", date: "April 19, 2023" },
];

const EventList: React.FC = () => {
	// Render item for each event
	const renderItem = (item: Event, i: number) => {
		return (
			<View style={styles.eventContainer} key={`event-${i}`}>
				<Text style={styles.eventTitle}>{item.title}</Text>
				<Text style={styles.eventLocation}>Location: {item.location}</Text>
				<Text style={styles.eventDate}>Date: {item.date}</Text>
			</View>
		);
	};

	return (
		<Screen>
			<View style={styles.container}>
				{events.map((item, i) => renderItem(item, i))}
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	eventContainer: {
		backgroundColor: "#fff",
		padding: 16,
		marginBottom: 8,
		borderRadius: 8,
	},
	eventTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4,
	},
	eventLocation: {
		fontSize: 14,
		color: "#666",
		marginBottom: 4,
	},
	eventDate: {
		fontSize: 14,
		color: "#333",
	},
});

export default EventList;
