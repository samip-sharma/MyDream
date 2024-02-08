import React, { useEffect } from "react";
import { Text } from "react-native";
import { GlobalContextProvider } from "_context";
import Navigation from "./src/Navigation/Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { BottomSheet } from "_components";

const App: React.FC = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<GlobalContextProvider>
					<BottomSheet />
					<SafeAreaView style={{ flex: 1 }}>
						<NavigationContainer>
							<Navigation />
						</NavigationContainer>
					</SafeAreaView>
				</GlobalContextProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

export default App;
