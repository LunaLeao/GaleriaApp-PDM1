import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import styles from './HomeScreen.style.ts';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { allPhotos, PhotoData } from '../../data/photos.ts';


export const HomeScreen = ({ navigation }: any) => {

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
  )

  return (
    <FlatList
      data={allPhotos}
      renderItem={renderPhotoCard}
      keyExtractor={(item) => item.id}
      style={styles.flatListBackground} 
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};