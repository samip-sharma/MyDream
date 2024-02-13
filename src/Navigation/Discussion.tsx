import { createStackNavigator } from "@react-navigation/stack";
import Sponsors from "../screens/Sponsors";
import DiscussionPost from "../screens/DiscussionPost";

const DiscussionStack = createStackNavigator();

const DiscussionStackNavigation = () => {
  return (
    <DiscussionStack.Navigator
      initialRouteName="Discussion"
      screenOptions={{
        headerShown: false,
      }}
    >
      <DiscussionStack.Screen name="Discussion" component={Sponsors} />

      <DiscussionStack.Screen
        name="DiscussionPost"
        component={DiscussionPost}
      />
    </DiscussionStack.Navigator>
  );
};
export default DiscussionStackNavigation as any;
