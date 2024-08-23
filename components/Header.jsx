import React from 'react';
import { Image, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useGlobalContext } from '@/context/GlobalProvider';
import { router } from 'expo-router';

export default function Header() {
  const { isLoggedIn, setIsLoggedIn, setUser } = useGlobalContext();

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Acción para cerrar sesión
      setIsLoggedIn(false);
      setUser(null);
      router.replace('/sign-in');
    } else {
      // Redirigir a la pantalla de inicio de sesión
      router.push('/sign-in');
    }
  };

  const navigateToHome = () => {
    router.replace('/index');
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F2C94C' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
        {/* Logo */}
        <TouchableOpacity onPress={navigateToHome} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: 'ruta_a_tu_logo' }} style={{ width: 100, height: 50 }} resizeMode="contain" />
        </TouchableOpacity>

        {/* Menú de Navegación */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
          {['Clases', 'Planes', 'Productos', 'Rutinas', 'Ticketera'].map((item, index) => (
            <TouchableOpacity 
              key={index} 
              onPress={navigateToHome} 
              style={{ marginHorizontal: 8, padding: 8, borderRadius: 5, backgroundColor: '#F2C94C' }} 
              activeOpacity={0.7}  // Efecto de toque
            >
              <Text style={{ color: '#000', fontWeight: '600' }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón de Inicio Sesión o Log Out */}
        <TouchableOpacity 
          onPress={handleAuthAction} 
          style={{ padding: 8, borderRadius: 5, backgroundColor: '#F2C94C' }} 
          activeOpacity={0.7}  // Efecto de toque
        >
          <Text style={{ color: '#000', fontWeight: '600' }}>
            {isLoggedIn ? 'Log Out' : 'Inicio Sesión'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
