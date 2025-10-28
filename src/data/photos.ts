// src/data/photos.ts
import { ImageSourcePropType } from 'react-native';

// 1. Defina a interface aqui
export interface PhotoData {
    id: string;
    imageSource: ImageSourcePropType;
    title: string;
    date: string;
    category: 'paisagem' | 'pessoa';
}

// 2. Defina e EXPORTE o array de fotos
export const allPhotos: PhotoData[] = [
    {
        id: '1',
        imageSource: require('../../assets/praia.jpg'), // Corrija o caminho se necessário
        title: 'Praia Tropical',
        date: '2025-10-28',
        category: 'paisagem',
    },
    {
        id: '2',
        imageSource: { uri: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' },
        title: 'Retrato Urbano',
        date: '2025-10-27',
        category: 'pessoa',
    },
    {
        id: '3',
        imageSource: { uri: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600' },
        title: 'Montanhas Nebulosas',
        date: '2025-10-26',
        category: 'paisagem',
    },
    {
        id: '4',
        imageSource: { uri: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600' },
        title: 'Homem de Negócios',
        date: '2025-10-25',
        category: 'pessoa',
    },
    {
        id: '5',
        imageSource: require('../../assets/praia.jpg'),
        title: 'Praia 2',
        date: '2025-10-24',
        category: 'paisagem',
    },
];
