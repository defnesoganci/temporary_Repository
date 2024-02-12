import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LibraryScreen from './screens/LibraryScreen';
import ExploreScreen from './screens/ExploreScreen';
import ReadingScreen from './screens/ReadingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { LibraryProvider } from './context/LibraryContext';
// Import Ionicons from react-native-vector-icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Library') {
            
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Reading') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else {
            iconName = 'alert'; // Default icon
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Reading" component={ReadingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <LibraryProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </LibraryProvider>
  );
}
