import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { PeopleScreen } from '../screens/PeopleScreen/PeopleScreen';
import { DetailsScreen } from '../screens/DetailsScreen/DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PhotoData } from '../data/photos';

export type PeopleStackParamList = {
  People: undefined;
  Details: { photo: PhotoData };
};

const Stack = createNativeStackNavigator<PeopleStackParamList>();


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

export const PeopleStackNavigator = () => {
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
        name="People"
        component={PeopleScreen}
        options={({ navigation }) => ({
          title: 'Pessoas',
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