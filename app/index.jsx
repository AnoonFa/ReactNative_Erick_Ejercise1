import React from 'react';
import { View } from 'react-native';
import Carousel from '../components/Carousel';
import  Header  from '../components/Header';
import Plans from '../components/Plans';
import { StatusBar } from 'expo-status-bar';


export default function HomePage() {
  return (<>
    <StatusBar backgroundColor='#161622' 
          style='light'/>
    <View style={{ flex: 1 }}>
      {/* Carrusel */}
      <Header/>
      <Carousel />

      {/* Google Maps */}


      {/* Planes */}
      <Plans />


    </View>
    
</>
  );
}
