import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio Screen</Text>
    </View>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
