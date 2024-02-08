import React, { ReactNode } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { BottomSheet } from "_components";
import { colors } from "_styles";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

interface IProps {
  showHeader?: boolean;
  children: ReactNode;
}

const Screen: React.FC<IProps> = ({ children, showHeader = true }) => {
  return (
    <>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <View>{children}</View>
      </ScrollView>
    </>
  );
};

export default Screen;
