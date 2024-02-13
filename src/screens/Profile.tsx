import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useUser } from "_context";
import Screen from "_components/Screen";
import { FlexImage } from "_components";
import { dummyProfile } from "../assets/dummyData/data";

const Profile: React.FC = () => {
  const { username } = useUser();
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FlexImage imageUrl={dummyProfile} />
        </View>
        <View>
          <Text>Name: Samip</Text>
          <Text>Title: Software developer</Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 16,
  },
  imageContainer: { height: 100, width: 100 },
});

export default Profile;
