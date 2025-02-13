import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './components/HomeScreen'; // Import from components folder
import AITeacher from './components/AiTeacher'; // Import from components folder
import Trading from './components/Trading'; // Import from components folder
import SocialFeed from './components/SocialFeed'; // Import from components folder
import ProfileScreen from './components/ProfileScreen'; // Import from components folder

// Dummy data for portfolio graph
const portfolioData = {
    labels: ['1W', '2W', '3W', '4W'],
    datasets: [
        {
            data: [5000, 5200, 5150, 5240],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 2
        }
    ]
};

// Home Screen Component
function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Icon name="person" size={24} color="#FFFFFF" />
                <Text style={styles.logo}>EvoTrade</Text>
                <Icon name="notifications" size={24} color="#FFFFFF" />
            </View>

            {/* Portfolio Summary */}
            <View style={styles.portfolioSection}>
                <Text style={styles.welcomeText}>Welcome Back, Sarah!</Text>
                <Text style={styles.portfolioValue}>$5,240.50 <Text style={styles.gainText}>2.1%</Text></Text>
                <LineChart
                    data={portfolioData}
                    width={350}
                    height={200}
                    chartConfig={{
                        backgroundGradientFrom: '#1A1A1A',
                        backgroundGradientTo: '#1A1A1A',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: { borderRadius: 16 }
                    }}
                    bezier
                />
            </View>

            {/* Quick Actions Bar */}
            <View style={styles.quickActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="android" size={24} color="#FFFFFF" />
                    <Text style={styles.actionText}>AI Teacher</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="security" size={24} color="#FFFFFF" />
                    <Text style={styles.actionText}>Risk Check</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="flash-on" size={24} color="#FFFFFF" />
                    <Text style={styles.actionText}>Invest Now</Text>
                </TouchableOpacity>
            </View>

            {/* Featured Section */}
            <View style={styles.featuredSection}>
                <View style={styles.featuredCard}>
                    <Text style={styles.cardTitle}>Today's AI Tip</Text>
                    <Text style={styles.cardText}>"Diversify your portfolio to minimize risk."</Text>
                </View>
                <View style={styles.featuredCard}>
                    <Text style={styles.cardTitle}>Trending Portfolio</Text>
                    <Text style={styles.cardText}>@InvestorPro +15%</Text>
                    <TouchableOpacity style={styles.copyButton}>
                        <Text style={styles.copyButtonText}>Copy Trade</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

// Profile Screen Component
function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
        </View>
    );
}

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
 
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        const icons = {
                            Home: 'home',
                            Learn: 'school',
                            Trade: 'trending-up',
                            Social: 'people',
                            Profile: 'person',
                        };
                        return <Icon name={icons[route.name]} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#8641F4',
                    tabBarInactiveTintColor: '#FFFFFF',
                    tabBarStyle: {
                        backgroundColor: '#1A1A1A',
                        borderTopWidth: 0,
                    },
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Learn" component={AITeacher} /> {/* AI Teacher */}
                <Tab.Screen name="Trade" component={Trading} /> {/* Trading Interface */}
                <Tab.Screen name="Social" component={SocialFeed} /> {/* Social Feed */}
                <Tab.Screen name="Profile" component={ProfileScreen} /> {/* Profile Screen */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 16,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    portfolioSection: {
        marginBottom: 20,
    },
    welcomeText: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 8,
    },
    portfolioValue: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    gainText: {
        color: '#00FF00', // Green for gains
        fontSize: 16,
    },
    quickActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    actionButton: {
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#2A2A2A',
        borderRadius: 12,
        width: '30%',
    },
    actionText: {
        color: '#FFFFFF',
        marginTop: 8,
    },
    featuredSection: {
        gap: 16,
    },
    featuredCard: {
        backgroundColor: '#2A2A2A',
        borderRadius: 12,
        padding: 16,
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardText: {
        color: '#FFFFFF',
        opacity: 0.8,
    },
    copyButton: {
        backgroundColor: '#8641F4',
        padding: 8,
        borderRadius: 8,
        marginTop: 12,
        alignSelf: 'flex-start',
    },
    copyButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});


