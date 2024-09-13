import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalProvider'; // Importar contexto global

export default function Plans() {
  const { isLoggedIn } = useGlobalContext(); // Usar el estado de autenticación del contexto global
  const [selectedPlan, setSelectedPlan] = useState(null); // Estado para manejar el plan seleccionado
  const [modalVisible, setModalVisible] = useState(false); // Estado para manejar la visibilidad del modal
  const router = useRouter();

  const plans = [
    {
      title: 'Mensualidad',
      description: 'El plan más completo para alcanzar tus objetivos con prácticas libres y clases grupales.',
      price: '50.000',
      buttonText: '¡Inscríbete ya!',
      advantages: 'Máquinas, asesorías y rutinas personalizadas durante un mes.',
      duration: '1 mes',
    },
    {
      title: 'Trimestre',
      description: '11 prácticas libres en nuestros gimnasios para que puedas entrenar con la flexibilidad que necesites.',
      price: '130.000',
      buttonText: '¡Inscríbete ya!',
      advantages: 'Máquinas, asesorías y rutinas personalizadas durante tres meses.',
      duration: '3 meses',
    },
    {
      title: 'Semestre',
      description: 'Ejercítate junto a tu partner y logren juntos la meta esperada.',
      price: '280.000',
      buttonText: '¡Inscríbete ya!',
      advantages: 'Máquinas, asesorías y rutinas personalizadas durante seis meses.',
      duration: '6 meses',
    },
    {
      title: 'Año',
      description: 'El plan más completo para alcanzar tus objetivos con prácticas libres y clases grupales.',
      price: '550.000',
      buttonText: '¡Inscríbete ya!',
      advantages: 'Máquinas, asesorías y rutinas personalizadas durante un año.',
      duration: '12 meses',
    },
  ];

  // Función para manejar el clic en "¡Inscríbete ya!"
  const handleSignUp = (plan) => {
    if (!isLoggedIn) {
      // Si el usuario no está logueado, redirigirlo al login
      Alert.alert(
        'Iniciar sesión',
        'Debes iniciar sesión para inscribirte a un plan.',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Iniciar sesión',
            onPress: () => router.push('/sign-in'), // Redirigir a la página de inicio de sesión
          },
        ]
      );
    } else {
      // Si está logueado, mostrar el modal con la información del plan
      setSelectedPlan(plan);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Elige tu plan y entrena ya</Text>

      {plans.map((plan, index) => (
        <View key={index} style={styles.planContainer}>
          <Text style={styles.planTitle}>{plan.title}</Text>
          <Text style={styles.planDescription}>{plan.description}</Text>
          <Text style={styles.planDescription}>{plan.advantages}</Text>
          <Text style={styles.planPriceLabel}>DESDE</Text>
          <Text style={styles.planPrice}>${plan.price}</Text>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => handleSignUp(plan)} // Verificar si está logueado antes de mostrar el modal
          >
            <Text style={styles.buttonText}>{plan.buttonText}</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Modal para mostrar la confirmación de la compra */}
      {selectedPlan && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>¿Deseas comprar el plan {selectedPlan.title}?</Text>
              <Text style={styles.modalText}>
                Para adquirir este plan debes ir hasta el gimnasio. Los horarios disponibles son:
              </Text>
              <Text style={styles.modalText}>Lunes a Viernes: 6:00 AM - 10:00 PM</Text>
              <Text style={styles.modalText}>Sábado: 8:00 AM - 4:00 PM</Text>
              <Text style={styles.modalText}>Domingo: Cerrado</Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#0f8ff1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
