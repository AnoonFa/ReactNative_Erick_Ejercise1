import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

export default function DrawerMenu({ visible, onClose, navigateToUnderConstruction }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        activeOpacity={1}
        onPressOut={onClose} // Cerrar al hacer clic fuera del drawer
      >
        <View style={{ 
          width: '70%', 
          height: '100%', 
          backgroundColor: '#fff', 
          padding: 20,
          justifyContent: 'flex-start', 
          position: 'absolute', 
          left: 0 
        }}>
          {/* Opciones de Menú */}
          {['Clases', 'Planes', 'Productos', 'Rutinas', 'Ticketera'].map((item, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={() => {
                onClose();  // Cierra el drawer al seleccionar una opción
                navigateToUnderConstruction('/UnderConstruction');  // Redirige a la página de "En construcción"
              }} 
              style={{ marginVertical: 10, padding: 10, borderRadius: 5, backgroundColor: '#F2C94C' }} 
              activeOpacity={0.7}
            >
              <Text style={{ color: '#000', fontWeight: '600' }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Texto para cerrar menú */}
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
            <Text style={{ color: '#000', textAlign: 'center' }}>Cerrar Menú</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}