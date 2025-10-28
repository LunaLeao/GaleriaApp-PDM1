import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen.tsx';
import { DetailsScreen } from '../screens/DetailsScreen/DetailsScreen.tsx';
import { PhotoData } from '../data/photos';

export type HomeStackParamList = {
  Home: undefined;
  Details: { photo: PhotoData };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const DrawerMenuButton = ({ navigation }: any) => {
  return (
    <Ionicons
      name="menu"
      size={25}
      color="#ffffffff"
      onPress={() => navigation.openDrawer()}
    />
  );
};

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#212121',
        },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Galeria Principal',
          headerLeft: () => <DrawerMenuButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Detalhes da Foto' }}

      />
    </Stack.Navigator>
  );
};