import React from "react";
import * as types from "_types";

const defaultValues: types.User = {};

const UserStateContext = React.createContext<types.User>(defaultValues);

interface IGeneralUserDispatch {
	setUserData(userData: types.User): void;
}

const UserDispatchContext = React.createContext<IGeneralUserDispatch>({
	setUserData() {},
});

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [userData, setUserData] = React.useState<types.User>(defaultValues);

	return (
		<UserStateContext.Provider value={userData}>
			<UserDispatchContext.Provider value={{ setUserData }}>
				{children}
			</UserDispatchContext.Provider>
		</UserStateContext.Provider>
	);
};

export default UserContextProvider;

export const useUser = () => React.useContext(UserStateContext);
export const useUserDispatch = () => React.useContext(UserDispatchContext);
