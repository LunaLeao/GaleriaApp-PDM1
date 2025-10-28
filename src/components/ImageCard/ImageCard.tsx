// src/components/ImageCard/ImageCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import styles from './ImageCard.style.ts';
import { formatDate } from '../../utils/dateUtils';

interface ImageCardProps {
    imageSource: ImageSourcePropType;
    title: string;
    date: string;
    onPress: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
    imageSource,
    title,
    date,
    onPress,
}) => {

    const formattedDate = formatDate(date);

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
            <Image source={imageSource} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
        </TouchableOpacity>
    );
};