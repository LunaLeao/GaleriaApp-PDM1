import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from './TabNavigator';
import { SettingsScreen } from '../screens/SettingsScreen/SettingsScreen';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Galeria') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Configurações') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'gray',

        drawerStyle: {
          backgroundColor: '#212121',
        },

        headerStyle: {
          backgroundColor: '#212121',
        },
        headerTintColor: '#FFFFFF',
      })}>
    
      <Drawer.Screen
        name="Galeria"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{ title: 'Configurações do App' }}
      />
    </Drawer.Navigator>
  );
};