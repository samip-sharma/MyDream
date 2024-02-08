import React from "react";
import { Text } from "react-native";
import { useUser } from "_context";
import Screen from "_components/Screen";

const Home: React.FC = () => {
	const { username } = useUser();
	console.log({ username });
	return (
		<>
			<Screen>
				<Text>Home pagee</Text>
			</Screen>
		</>
	);
};

export default Home;
