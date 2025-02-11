import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AIScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AI Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});

export default AIScreen;
