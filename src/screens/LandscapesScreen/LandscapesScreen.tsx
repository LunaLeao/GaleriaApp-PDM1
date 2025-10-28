import React from 'react';
import { View, FlatList, ListRenderItemInfo, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { allPhotos, PhotoData } from '../../data/photos';
import styles from './LandscapesScreen.style.ts';



export const LandscapesScreen = ({ navigation }: any) => {

  const landscapePhotos = allPhotos.filter(photo => photo.category === 'paisagem');

  const handleCardPress = (photoData: PhotoData) => {
    navigation.navigate('Details', { photo: photoData });
  };

  const renderPhotoCard = ({ item }: ListRenderItemInfo<PhotoData>) => (
    <ImageCard
      imageSource={item.imageSource}
      title={item.title}
      date={item.date}
      onPress={() => handleCardPress(item)}
    />
  );

  return (
    <FlatList
      data={landscapePhotos}
      renderItem={renderPhotoCard}
      keyExtractor={(item) => item.id}
      style={styles.flatListBackground} 
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};