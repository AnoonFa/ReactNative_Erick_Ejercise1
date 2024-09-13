import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, Image, Dimensions, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function Carousel() {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require('../assets/images/gymfoto1.png'),
    require('../assets/images/gymfoto2.png'),
    require('../assets/images/gymfoto3.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementa el índice, y vuelve al primer índice cuando llega al final
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      
      // Desplaza al siguiente slide
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
      }
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, [currentIndex, images.length]);

  const handleScroll = (event) => {
    // Actualiza el índice actual basado en la posición del scroll
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      style={{ height: 200 }}
    >
      {images.map((image, index) => (
        <View key={index} style={{ width, height: 200 }}>
          <Image
            source={image}
            style={{ width, height: 200, resizeMode: 'cover' }}
          />
        </View>
      ))}
    </ScrollView>
  );
}