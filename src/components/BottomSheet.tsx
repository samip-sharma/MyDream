import React, { ReactNode } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import Header from "./Header";
import { colors } from "_styles";
import BottomSheet from "reanimated-bottom-sheet";
import { useEffect } from "react";
import { useBottomSheetDispatch, useBottomSheetState } from "_context";
import Animated from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#FFFFFF",
		shadowColor: "#333333",
		shadowOffset: { width: -1, height: -3 },
		shadowRadius: 2,
		shadowOpacity: 0.4,
		// elevation: 5,
		paddingTop: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	panelHeader: {
		alignItems: "center",
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#00000040",
		marginBottom: 10,
	},
});

const BottomSheetComponent: React.FC = () => {
	const sheetRef = React.useRef<BottomSheet>(null);

	const { setRef: setBottomSheetRef, close } = useBottomSheetDispatch();
	const { child: BottomSheetChild, snapPoints } = useBottomSheetState();

	useEffect(() => {
		if (sheetRef.current) setBottomSheetRef(sheetRef.current);
	}, [sheetRef]);

	return (
		<BottomSheet
			ref={sheetRef}
			snapPoints={snapPoints}
			renderHeader={() => (
				<View style={styles.header}>
					<View style={styles.panelHeader}>
						<View style={styles.panelHandle} />
					</View>
				</View>
			)}
			onCloseEnd={() => {
				close();
			}}
			renderContent={() => (
				<View
					style={{
						backgroundColor: "white",
						padding: 16,
						height: "100%",
					}}
				>
					{BottomSheetChild}
				</View>
			)}
		/>
	);
};

export default BottomSheetComponent;
