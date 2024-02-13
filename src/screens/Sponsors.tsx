import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import useRootNavigation from "src/hooks/useRootNavigation";
import Screen from "_components/Screen";

// Post interface for post data
interface Post {
	id: number;
	title: string;
	author: string;
	score: number;
}

// List of posts data
const posts: Post[] = [
	{ id: 1, title: "Post 1", author: "User 1", score: 10 },
	{ id: 2, title: "Post 2", author: "User 2", score: 5 },
	{ id: 3, title: "Post 3", author: "User 3", score: 2 },
	{ id: 4, title: "Post 4", author: "User 4", score: 15 },
	{ id: 5, title: "Post 5", author: "User 5", score: 8 },
];

const PostList: React.FC = () => {
	// Render item for each post
	const navigateToPage = (page: string) => {
		navigation.navigate(page);
	};
	let navigation = useNavigation();
	const renderItem = (item: Post, i: number) => {
		return (
			<TouchableOpacity
				onPress={() => {
					navigateToPage("DiscussionPost");
				}}
				style={styles.postContainer}
				key={`post-${i}`}
			>
				<Text style={styles.postTitle}>{item.title}</Text>
				<Text style={styles.postAuthor}>By {item.author}</Text>
				<Text style={styles.postScore}>Score: {item.score}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<Screen>
			<View style={styles.container}>
				{posts.map((item, i) => renderItem(item, i))}
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	postContainer: {
		backgroundColor: "#fff",
		padding: 16,
		marginBottom: 8,
		borderRadius: 8,
	},
	postTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4,
	},
	postAuthor: {
		fontSize: 14,
		color: "#666",
		marginBottom: 4,
	},
	postScore: {
		fontSize: 14,
		color: "#333",
	},
});

export default PostList;
