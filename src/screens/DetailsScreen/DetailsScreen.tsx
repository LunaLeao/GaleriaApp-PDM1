import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, ImageSourcePropType } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/HomeStackNavigator';
import styles from './DetailsScreen.style.ts'
import { formatDate } from '../../utils/dateUtils';

type DetailsScreenProps = NativeStackScreenProps<HomeStackParamList, 'Details'>;

type DetailsScreenRouteParams = {
  photo: {
    id: string;
    imageSource: ImageSourcePropType;
    title: string;
    date: string;
    category: string;
  };
};

const screenHeight = Dimensions.get('window').height;

export const DetailsScreen = ({ route }: { route: { params: DetailsScreenRouteParams } }) => {
  const { photo } = route.params;

  const formattedDate = formatDate(photo.date);

  const formattedCategory =
    photo.category.charAt(0).toUpperCase() + photo.category.slice(1);

  return (
    <ScrollView style={styles.scrollView}>
      <Image
        source={photo.imageSource}
        style={styles.fullImage}
        resizeMode="contain"
      />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{photo.title}</Text>
        <Text style={styles.info}>Categoria: {formattedCategory}</Text>
        <Text style={styles.info}>Data: {formattedDate}</Text>
      </View>
    </ScrollView>
  );
};