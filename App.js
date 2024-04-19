import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
  View, 
  TextInput, 
  Button, 
  Text, 
  StyleSheet 
} from 'react-native';

import EmailBreach from "./pages/EmailBreach.js";
import LatestBreach from "./pages/LatestBreach.js"
import BreachInfo from "./pages/BreachInfo.js"

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
      <Tab.Screen
        name="EmailBreach"
        component={EmailBreach}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LatestBreach"
        component={LatestBreach}
        options={{
          tabBarLabel: 'LatestBreach',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="arrow-down-drop-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BreachInfo"
        component={BreachInfo}
        options={{
          tabBarLabel: 'Breach Info',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="arrow-down-drop-circle" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;