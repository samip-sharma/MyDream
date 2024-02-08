import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useUser } from "_context";
import Screen from "_components/Screen";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "red", padding: 16 },
});
const Profile: React.FC = () => {
  const { username } = useUser();
  console.log({ username });
  return (
    <Screen>
      <View style={styles.container}></View>
    </Screen>
  );
};

export default Profile;
