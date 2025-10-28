import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStackNavigator } from './HomeStackNavigator';
import { LandscapesStackNavigator } from './LandscapesStackNavigator';
import { PeopleStackNavigator } from './PeopleStackNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'LandscapesStack') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'PeopleStack') {
            iconName = focused ? 'people' : 'people-outline';
          }

          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          backgroundColor: '#212121',
          height: 70,
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ title: 'Início', headerShown: false }}
      />
      <Tab.Screen
        name="LandscapesStack"
        component={LandscapesStackNavigator}
        options={{ title: 'Paisagens', headerShown: false }}
      />
      <Tab.Screen
        name="PeopleStack"
        component={PeopleStackNavigator}
        options={{ title: 'Pessoas', headerShown: false }}
      />
    </Tab.Navigator>
  );
};