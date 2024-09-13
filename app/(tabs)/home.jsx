import React from 'react';
import { View, ScrollView } from 'react-native';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import Plans from '../../components/Plans';
import { StatusBar } from 'expo-status-bar';

function Home() {
  return (
    <>
      <StatusBar backgroundColor='#161622' style='light' />
      <View style={{ flex: 1 }}>
        {/* Header siempre visible arriba */}
        <Header />
        
        {/* Contenido desplazable */}
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <Carousel />
          
          {/* Aquí puedes agregar otros componentes como Google Maps */}

          <Plans />
        </ScrollView>
      </View>
    </>
  );
}

export default Home