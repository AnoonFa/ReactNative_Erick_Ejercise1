import React from 'react';
import { ScrollView, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Carousel() {
  const images = [
    { uri: 'http://localhost:3000/static/media/gymfoto1.b51b46cc915c09568fa7.png' },
    { uri: 'http://localhost:3000/static/media/gymfoto3.57ffc02ebfab66052092.png' },
    { uri: 'http://localhost:3000/static/media/gymfoto2.ae0339c26bfa7b3ae358.png' },
  ];

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ height: 200 }}
    >
      {images.map((image, index) => (
        <Image key={index} source={image} style={{ width, height: 200 }} />
      ))}
    </ScrollView>
  );
}
