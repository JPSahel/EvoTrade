import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PortfolioChart from "../components/portfolioChart";
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <PortfolioChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
