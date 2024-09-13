import React, { useState } from 'react';
import { Image, SafeAreaView, View, Text, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { useGlobalContext } from '@/context/GlobalProvider';
import { router } from 'expo-router';
import DrawerMenu from './DrawerMenu'; // Importamos el componente del Drawer

const { width } = Dimensions.get('window');

export default function Header() {
  const { isLoggedIn, setIsLoggedIn, setUser } = useGlobalContext();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUser(null);
      router.replace('/sign-in');
    } else {
      router.push('/sign-in');
    }
  };

  const navigateToHome = () => {
    router.replace('/index');
  };

  const navigateToUnderConstruction = () => {
    router.push('/UnderConstruction');  // Redirige a la página en construcción
  };

  return (
    <>
      {/* Barra de estado */}
      <StatusBar backgroundColor='#000000' barStyle="ligth-content" />
      
      <SafeAreaView style={{ backgroundColor: '#F2C94C', paddingTop: StatusBar.currentHeight }}>
        <View style={{ 
          height: 70,
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',  // Para distribuir los elementos en la fila
          paddingHorizontal: 16, 
        }}>
          {/* Contenedor para el Menú hamburguesa y Logo */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Menú hamburguesa */}
            <TouchableOpacity onPress={() => setDrawerVisible(true)} style={{ paddingRight: 8 }}>
              <Image 
                source={require('../assets/icon/menu.png')} // Asegúrate de que la ruta a la imagen sea correcta
                style={{ width: 30, height: 30 }} // Ajusta el tamaño según sea necesario
                resizeMode="contain"
              />
            </TouchableOpacity>

            {/* Logo */}
            <TouchableOpacity onPress={navigateToHome} style={{ marginLeft: 8 }}>
              <Image 
                source={require('../assets/images/David&GoliatLogo.png')}  // Asegúrate de cambiar a la ruta correcta
                style={{ width: width < 400 ? 60 : 100, height: width < 400 ? 60 : 100 }}  // Ajuste de tamaño en móviles
                resizeMode="contain" 
              />
            </TouchableOpacity>
          </View>

          {/* Botón de Inicio Sesión o Log Out al final */}
          <TouchableOpacity 
            onPress={handleAuthAction} 
            style={{ padding: 8, borderRadius: 5, backgroundColor: '#F2C94C', marginLeft: 8 }} 
            activeOpacity={0.7}
          >
            <Text style={{ color: '#000', fontWeight: '600', fontSize: width < 400 ? 12 : 14 }}>
              {isLoggedIn ? 'Log Out' : 'Iniciar Sesión'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Drawer Menu separado */}
      <DrawerMenu
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        navigateToUnderConstruction={navigateToUnderConstruction}
      />
    </>
  );
}
