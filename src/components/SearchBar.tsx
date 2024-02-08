import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
	onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		// Call the onSearch callback with the current search query
		onSearch(searchQuery);
	};

	return (
		<View style={styles.container}>
			<Ionicons name="search" size={20} color="gray" style={styles.icon} />
			<TextInput
				style={styles.input}
				placeholder="Search"
				value={searchQuery}
				onChangeText={setSearchQuery}
				onSubmitEditing={handleSearch}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
		borderRadius: 10,
		marginHorizontal: 10,
	},
	input: {
		flex: 1,
		padding: 10,
	},
	icon: {
		paddingLeft: 10,
	},
});

export default SearchBar;
