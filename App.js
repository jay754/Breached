import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { 
  View, 
  TextInput, 
  Button, 
  Text, 
  StyleSheet 
} from 'react-native';

import EmailBreach from "./pages/EmailBreach.js";
import Breach from "./pages/Breach.js"

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={EmailBreach} />
        <Tab.Screen name="Breach" component={Breach} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;