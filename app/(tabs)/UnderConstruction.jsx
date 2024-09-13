import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UnderConstruction = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/construccion.png')} // Add your construction image to assets
        style={styles.image}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Página en Construcción</Text>
      <Text style={{ fontSize: 16, marginVertical: 10 }}>Lo sentimos, esta sección aún está en desarrollo.</Text>
      <Button 
        title="Volver"
        onPress={() => navigation.goBack()}
        color="#FFA001"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
});

export default UnderConstruction;