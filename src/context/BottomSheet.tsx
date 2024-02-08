import React from "react";
import BottomSheetBehavior from "reanimated-bottom-sheet";
import * as types from "_types";

interface BottomSheet {
	isOpen: Boolean;
	child: React.ReactNode;
	snapPoints: (string | number)[];
}

const defaultValues: BottomSheet = {
	isOpen: false,
	child: <></>,
	snapPoints: [0, "80%"],
};

const BottomSheetStateContext = React.createContext<BottomSheet>(defaultValues);

interface IGeneralBottomSheetDispatch {
	open: ({
		child,
		snapPoints,
	}: {
		child: BottomSheet["child"];
		snapPoints?: BottomSheet["snapPoints"];
	}) => void;
	close: () => void;
	setRef: (ref: BottomSheetBehavior) => void;
}

const BottomSheetDispatchContext =
	React.createContext<IGeneralBottomSheetDispatch>({
		open: () => {},
		close: () => {},
		setRef: () => {},
	});

const BottomSheetContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [child, setChild] = React.useState<BottomSheet["child"]>(
		defaultValues["child"]
	);
	const [isOpen, setIsOpen] = React.useState<Boolean>(defaultValues["isOpen"]);

	const [snapPoints, setSnapPoints] = React.useState<BottomSheet["snapPoints"]>(
		defaultValues["snapPoints"]
	);

	let bottomSheetReff = React.useRef<BottomSheetBehavior | null>(null);

	const setRef = (ref: BottomSheetBehavior) => {
		bottomSheetReff.current = ref;
	};

	const open: IGeneralBottomSheetDispatch["open"] = ({ child, snapPoints }) => {
		bottomSheetReff.current?.snapTo(1);
		setChild(child);
		setIsOpen(true);
		setSnapPoints(snapPoints);
	};

	const close: IGeneralBottomSheetDispatch["close"] = () => {
		bottomSheetReff.current?.snapTo(0);
		setChild(defaultValues["child"]);
		setIsOpen(false);
	};

	return (
		<BottomSheetStateContext.Provider value={{ child, isOpen, snapPoints }}>
			<BottomSheetDispatchContext.Provider value={{ open, close, setRef }}>
				{children}
			</BottomSheetDispatchContext.Provider>
		</BottomSheetStateContext.Provider>
	);
};

export default BottomSheetContextProvider;

export const useBottomSheetState = () =>
	React.useContext(BottomSheetStateContext);
export const useBottomSheetDispatch = () =>
	React.useContext(BottomSheetDispatchContext);
