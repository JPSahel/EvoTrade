import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TradeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Trade Screen</Text>
    </View>
  );
};
export default TradeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
