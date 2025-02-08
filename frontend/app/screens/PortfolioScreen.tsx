import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Portfolio Screen</Text>
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Black background
  },
});
