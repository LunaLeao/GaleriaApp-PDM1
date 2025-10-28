import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { LandscapesScreen } from '../screens/LandscapesScreen/LandscapesScreen';
import { DetailsScreen } from '../screens/DetailsScreen/DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PhotoData } from '../data/photos';

export type LandscapesStackParamList = {
  Landscapes: undefined;
  Details: { photo: PhotoData };
};

const Stack = createNativeStackNavigator<LandscapesStackParamList>();

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

export const LandscapesStackNavigator = () => {
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
        name="Landscapes"
        component={LandscapesScreen}
        options={({ navigation }) => ({
          title: 'Paisagens',
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