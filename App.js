import React, { useState } from 'react';
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

const App = () => {
  return (
    <EmailBreach />
  );
};

export default App;