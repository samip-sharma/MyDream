import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Screen from "_components/Screen";

interface Comment {
	id: number;
	content: string;
	upvotes: number;
	downvotes: number;
}

interface Post {
	id: number;
	content: string;
	upvotes: number;
	downvotes: number;
	comments: Comment[];
}

interface DiscussionPostProps {
	post: Post;
}

const post = {
	title: "Sample Post Title",
	content:
		"This is a sample post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	upvotes: 10,
	downvotes: 2,
	comments: [
		{
			id: 1,
			user: "User1",
			content:
				"This is a comment from User1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			upvotes: 5,
			downvotes: 1,
		},
		{
			id: 2,
			user: "User2",
			content:
				"This is a comment from User2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			upvotes: 3,
			downvotes: 0,
		},
		// Add more comments as needed
	],
};

const DiscussionPost: React.FC = () => {
	const [postVotes, setPostVotes] = useState(post.upvotes - post.downvotes);
	const [comments, setComments] = useState(post.comments);

	const handleUpvotePost = () => {
		setPostVotes(postVotes + 1);
	};

	const handleDownvotePost = () => {
		setPostVotes(postVotes - 1);
	};

	const handleUpvoteComment = (commentId: number) => {
		setComments((prevComments) =>
			prevComments.map((comment) => {
				if (comment.id === commentId) {
					return {
						...comment,
						upvotes: comment.upvotes + 1,
					};
				}
				return comment;
			})
		);
	};

	const handleDownvoteComment = (commentId: number) => {
		setComments((prevComments) =>
			prevComments.map((comment) => {
				if (comment.id === commentId) {
					return {
						...comment,
						downvotes: comment.downvotes + 1,
					};
				}
				return comment;
			})
		);
	};

	return (
		<Screen>
			<View style={styles.container}>
				<View style={styles.postContainer}>
					<Text style={styles.postContent}>{post.content}</Text>
					<View style={styles.voteContainer}>
						<TouchableOpacity
							style={styles.voteButton}
							onPress={handleUpvotePost}
						>
							<Text style={styles.voteButtonText}>Upvote</Text>
						</TouchableOpacity>
						<Text style={styles.voteCount}>{postVotes}</Text>
						<TouchableOpacity
							style={styles.voteButton}
							onPress={handleDownvotePost}
						>
							<Text style={styles.voteButtonText}>Downvote</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.commentsContainer}>
					{comments.map((comment) => (
						<View style={styles.commentContainer} key={comment.id}>
							<Text style={styles.commentContent}>{comment.content}</Text>
							<View style={styles.voteContainer}>
								<TouchableOpacity
									style={styles.voteButton}
									onPress={() => handleUpvoteComment(comment.id)}
								>
									<Text style={styles.voteButtonText}>Upvote</Text>
								</TouchableOpacity>
								<Text style={styles.voteCount}>{comment.upvotes}</Text>
								<TouchableOpacity
									style={styles.voteButton}
									onPress={() => handleDownvoteComment(comment.id)}
								>
									<Text style={styles.voteButtonText}>Downvote</Text>
								</TouchableOpacity>
							</View>
						</View>
					))}
				</View>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	postContainer: {
		backgroundColor: "#F0F0F0",
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
	},
	postContent: {
		fontSize: 16,
		marginBottom: 5,
	},
	voteContainer: {
		flexDirection: "row",

		justifyContent: "space-between",
		alignItems: "center",
	},
	voteButton: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: "#2196F3",
		borderRadius: 5,
		marginRight: 10,
	},
	voteButtonText: {
		color: "#FFFFFF",
		fontWeight: "bold",
	},
	voteCount: {
		fontSize: 16,
		fontWeight: "bold",
		marginHorizontal: 10,
	},
	commentsContainer: {
		backgroundColor: "#F5F5F5",
		borderRadius: 10,
		padding: 10,
	},
	commentContainer: {
		backgroundColor: "#FFFFFF",
		borderRadius: 5,
		padding: 10,
		marginVertical: 5,
	},
	commentContent: {
		fontSize: 14,
		marginBottom: 5,
	},
});

export default DiscussionPost;
