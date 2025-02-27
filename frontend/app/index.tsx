import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PortfolioScreen from "./screens/PortfolioScreen";
import TradeScreen from "./screens/TradeScreen";
import HomeScreen from "./screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons"; // For icons
import SearchScreen from "./screens/SearchScreen";
import AIScreen from "./screens/AIScreen";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text>{children}</Text>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Search") {
            iconName = "search-outline";
          }else if (route.name === "AI") {
            iconName = "cloud-outline";
          }else if (route.name === "Portfolio") {
            iconName = "wallet-outline";
          } else if (route.name === "Trade") {
            iconName = "swap-horizontal-outline";
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000", // Dark background for the tab bar
          borderTopWidth: 0, // Remove the top border
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="AI" component={AIScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Trade" component={TradeScreen} />
    </Tab.Navigator>
  );
}
