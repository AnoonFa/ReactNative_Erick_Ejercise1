import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../../components/Header'; 
import Plans from '../../components/Plans';
import { StatusBar } from 'expo-status-bar';

export default function PlansPage() {
  return (
    <>
      <StatusBar backgroundColor='#161622' style='light' />
      <View style={{ flex: 1 }}>
        {/* Header fixed at the top */}
        <Header />
        
        {/* Scrollable content */}
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Render Plans component here */}
          <Plans />
        </ScrollView>
      </View>
    </>
  );
}
