import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  HomeScreen: undefined;
  Login: undefined;
  Register: undefined;
  test?: { productPath: string; initialSelectedSku?: string };
  DiscussionPost: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type RootBottomTabsParamList = {
  DiscussionScreen: undefined;
  Rental: undefined;
  DashBoard: undefined;
  Tutor: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
