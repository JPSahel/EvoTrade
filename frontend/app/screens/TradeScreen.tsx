import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TradeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trade Screen</Text>
    </View>
  );
};
export default TradeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
