import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { PieChart } from "react-native-chart-kit";

const LandingScreen = () => {
  const chartData = [
    { name: "VFV", percentage: 33, color: "#5A2A1D", legendFontColor: "#FFF", legendFontSize: 12 },
    { name: "TSLA", percentage: 33, color: "#E6513E", legendFontColor: "#FFF", legendFontSize: 12 },
    { name: "META", percentage: 33, color: "#1E4B8E", legendFontColor: "#FFF", legendFontSize: 12 },
  ];

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Ionicons name="person-outline" size={24} color="white" />
        <MaterialCommunityIcons name="package-variant-closed" size={24} color="white" />
        <View style={styles.rightIcons}>
          <FontAwesome name="gift" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
      </View>

      {/* Donut Chart Section */}
      <View style={styles.chartContainer}>
        <PieChart
          data={chartData}
          width={Dimensions.get("window").width } // Adjust width
          height={280}
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#000",
            backgroundGradientTo: "#000",
            color: () => `rgba(255, 255, 255, 1)`,
          }}
          accessor="percentage"
          backgroundColor="transparent"
          paddingLeft="85"
          hasLegend={false}
          absolute
        />
        
        {/* Centered Text Inside Chart */}
        <View style={styles.centerTextContainer}>
          <Text style={styles.balance}>$4,700.00</Text>
          <Text style={styles.gain}>+ $100 (5%) past month</Text>
        </View>

        {/* Labels Around Chart */}
        <View style={styles.labelsContainer}>
          <Text style={[styles.label, styles.leftLabel]}>VFV{"\n"}33%</Text>
          <Text style={[styles.label, styles.rightLabel]}>TSLA{"\n"}33%</Text>
          <Text style={[styles.label, styles.bottomLabel]}>META{"\n"}33%</Text>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000",
  },
  rightIcons: {
    flexDirection: "row",
    gap: 10,
  },
  chartContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  centerTextContainer: {
    position: "absolute",
    top: "45%", // Centering text inside the donut
    alignItems: "center",
    width: "100%",
  },
  balance: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  gain: {
    color: "green",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  labelsContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  label: {
    position: "absolute",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  leftLabel: {
    left: 40,
    top: "20%",
  },
  rightLabel: {
    right: 60,
    top: "20%",
  },
  bottomLabel: {
    bottom: -10,
    alignSelf: "center",
  },
});
