import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de instalar la librería si aún no lo has hecho
import { useRouter } from 'expo-router'; // Import router from expo-router

export default function Plans() {
  const router = useRouter(); // Use router from expo-router

  const plans = [
    {
      title: 'Mensualidad',
      description: 'El plan más completo para alcanzar tus objetivos con prácticas libres y clases grupales.',
      price: '50.000',
      buttonText: '¡Inscríbete ya!',
    },
    {
      title: 'Trimestre',
      description: '11 prácticas libres en nuestros gimnasios para que puedas entrenar con la flexibilidad que necesites.',
      price: '130.000',
      buttonText: '¡Inscríbete ya!',
    },
    {
      title: 'Semestre',
      description: 'Ejercítate junto a tu partner y logren juntos la meta esperada.',
      price: '280.000',
      buttonText: '¡Inscríbete ya!',
    },
    {
      title: 'Año',
      description: 'El plan más completo para alcanzar tus objetivos con prácticas libres y clases grupales.',
      price: '550.000',
      buttonText: '¡Inscríbete ya!',
    },
  ];

  const navigateToUnderConstruction = () => {
    router.push('/UnderConstruction'); // Navigate to the UnderConstruction page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Elige tu plan y entrena ya</Text>

      {plans.map((plan, index) => (
        <View key={index} style={styles.planContainer}>
          <Text style={styles.planTitle}>{plan.title}</Text>
          <Text style={styles.planDescription}>{plan.description}</Text>

          <Text style={styles.planPriceLabel}>DESDE</Text>
          <Text style={styles.planPrice}>${plan.price}</Text>

          <TouchableOpacity style={styles.button}  onPress={() => {
              navigateToUnderConstruction(); // Navigate to UnderConstruction
            }}>
            <Text style={styles.buttonText}>{plan.buttonText}</Text>
          </TouchableOpacity>

          {/* Redirige a la página "UnderConstruction" al hacer clic en 'Mostrar beneficios' */}
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => {
              navigateToUnderConstruction(); // Navigate to UnderConstruction
            }}
          >
            <Text style={styles.linkText}>Mostrar beneficios </Text>
            <FontAwesome name="chevron-right" size={10} color="#343434" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#000000',
  },
  planContainer: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  planDescription: {
    fontSize: 16,
    color: '#6b6b6b',
    marginBottom: 8,
  },
  planPriceLabel: {
    fontSize: 14,
    color: '#6b6b6b',
    marginTop: 8,
  },
  planPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#0f8ff1',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    
    fontSize: 16,
    color: '#000000',
    textDecorationLine: 'none',
  },
});
