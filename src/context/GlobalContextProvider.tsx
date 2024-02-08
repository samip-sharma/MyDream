import React from "react";
import UserContextProvider from "./User";
import BottomSheetContextProvider from "./BottomSheet";

interface Iprops {
	children: React.ReactNode;
}

const GlobalContextProvider: React.FC<Iprops> = ({ children }) => {
	return (
		<BottomSheetContextProvider>
			<UserContextProvider>{children}</UserContextProvider>
		</BottomSheetContextProvider>
	);
};

export default GlobalContextProvider;
