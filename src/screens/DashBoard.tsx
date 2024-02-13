import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import Screen from "_components/Screen";
import MarksheetUploader from "_components/MarksheetUploader";
import { PrimaryButton } from "_components";

const Jobs = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Screen>
      {isOpen ? <Text>open</Text> : <Text>closed</Text>}
      <PrimaryButton onPress={handleChange} label="test"></PrimaryButton>
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
