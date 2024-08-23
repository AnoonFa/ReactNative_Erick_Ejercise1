import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapView() {
  return (
    <View style={{ height: 300, marginVertical: 16 }}>
      <WebView 
        source={{ uri: 'https://www.google.com/maps/embed?...' }} 
        style={{ flex: 1 }}
      />
    </View>
  );
}
