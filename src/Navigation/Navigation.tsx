import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "_screens";
import { Login } from "_screens";
import { Header } from "_components";
import * as types from "_types";
import DashBoard from "../screens/DashBoard";
import Tutor from "../screens/Tutor";
import DiscussionPost from "../screens/DiscussionPost";
import Register from "../screens/Register";
import Notification from "../screens/Notification";
import Welcome from "../screens/Welcome";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import DiscussionStackNavigation from "./Discussion";

const Stack = createStackNavigator<types.RootStackParamList>();
const Tab = createBottomTabNavigator<types.RootBottomTabsParamList>();

const BottomTabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="DashBoard"
        screenOptions={({ route }) => ({
          headerShown: true,
          header: () => <Header />,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof MaterialIcons.glyphMap;

            switch (route.name) {
              case "DashBoard":
                iconName = "work-outline";
                break;
              default:
                iconName = "question-answer";
                break;
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="DashBoard" component={DashBoard} />
        <Tab.Screen name="Tutor" component={Tutor} />
        <Tab.Screen
          name="DiscussionScreen"
          component={DiscussionStackNavigation}
        />
        {/* <Tab.Screen name="Rental" component={Rental} /> */}
      </Tab.Navigator>
    </>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={({ route }) => ({
        headerShown: false,
        header: () => <Header />,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HomeScreen" component={BottomTabNavigation} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DiscussionPost" component={DiscussionPost} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen
        name="Profile"
        options={{ headerShown: true }}
        component={Profile}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
