import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* Sección de Dirección y Teléfono */}
      <View style={styles.footerSection}>
        <Text style={styles.title}>Dirección</Text>
        <Text style={styles.text}>Tv. 14c Este #5489, Bogota</Text>
        <Text style={styles.title}>Teléfono Fijo</Text>
        <Text style={styles.text} onPress={() => Linking.openURL('tel:+576014567890')}>
          +57 (601) 456-7890
        </Text>
        <View style={styles.linksContainer}>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Términos y Condiciones</Text>
        </View>
      </View>

      {/* Sección de Correo y Horario */}
      <View style={styles.footerSection}>
        <Text style={styles.title}>Correo Electrónico</Text>
        <Text style={styles.text} onPress={() => Linking.openURL('mailto:gimnasiodavidgoliat@gmail.com')}>
          gimnasioDavidGoliat@gmail.com
        </Text>
        <View style={styles.linksContainer}>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Políticas de Privacidad</Text>
        </View>
        
      </View>

      {/* Sección de Sobre Nosotros */}
      <View style={styles.footerSection}>
        <Text style={styles.title}>Sobre Nosotros</Text>
        <Text style={styles.title}>Horario</Text>
        <Text style={styles.text}>Lunes a Viernes: 06:00 AM - 04:00 PM</Text>
        <Text style={styles.text}>Sábados: 08:00 AM - 04:00 PM</Text>
        <Text style={styles.text}>Domingos: 06:00 AM - 12:00 PM</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000', // Fondo negro
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerSection: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  linksContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  link: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginRight: 5,
  },
});

export default Footer;
