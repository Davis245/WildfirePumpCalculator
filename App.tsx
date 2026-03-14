import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'expo-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen';
import DataEntryScreen from './screens/DataEntryScreen';
import SupplyManagementScreen from './screens/SupplyManagementScreen';
import CustomTabBar from './components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="DataEntry"
          component={DataEntryScreen}
          options={{
            tabBarLabel: 'Data Entry',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="edit" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SupplyManagement"
          component={SupplyManagementScreen}
          options={{
            tabBarLabel: 'Water Supply',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="opacity" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
