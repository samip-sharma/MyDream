import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import Screen from "_components/Screen";
import MarksheetUploader from "_components/MarksheetUploader";

const Jobs = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <MarksheetUploader />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});

export default Jobs;
