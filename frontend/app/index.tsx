import React, { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PortfolioScreen from "./screens/PortfolioScreen";
import TradeScreen from "./screens/TradeScreen";
import HomeScreen from "./screens/HomeScreen";
import LandingScreen from "./screens/LandingScreen";
import StartScreen from "./screens/StartScreen";
import { Ionicons } from "@expo/vector-icons";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text>{children}</Text>
);
export default function App() {
  return (
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home-outline";
        } else if (route.name === "Portfolio") {
          iconName = "wallet-outline";
        } else if (route.name === "Trade") {
          iconName = "swap-horizontal-outline";
        } else if (route.name === "Landing") {
          iconName = "planet-outline"; // Use a valid Ionicons icon name
        }

        return <Ionicons name={iconName as any} size={size} color={color} />;
      },
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Portfolio" component={PortfolioScreen} />
    <Tab.Screen name="Trade" component={TradeScreen} />
    <Tab.Screen name="Landing" component={LandingScreen} />
  </Tab.Navigator>
);


