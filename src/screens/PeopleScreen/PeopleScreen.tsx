// src/screens/PeopleScreen/PeopleScreen.tsx
import React from 'react';
import { View, FlatList, ListRenderItemInfo, Text } from 'react-native';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { allPhotos, PhotoData } from '../../data/photos';
import styles from './PeopleScreen.style.ts';



export const PeopleScreen = ({ navigation }: any) => {

  const peoplePhotos = allPhotos.filter(photo => photo.category === 'pessoa');

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
      data={peoplePhotos}
      renderItem={renderPhotoCard}
      keyExtractor={(item) => item.id}
      style={styles.flatListBackground} 
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};