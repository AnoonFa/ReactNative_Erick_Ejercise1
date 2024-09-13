import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, View, Text, TouchableOpacity, StatusBar, Dimensions, Alert } from 'react-native';
import { useGlobalContext } from '@/context/GlobalProvider';
import { router } from 'expo-router';
import DrawerMenu from './DrawerMenu';  // Importamos el componente del Drawer
import { account, checkSession, getCurrentUser } from '@/lib/appwrite';  // Asegúrate de importar correctamente

const { width } = Dimensions.get('window');

export default function Header() {
  const { isLoggedIn, setIsLoggedIn, setUser } = useGlobalContext();
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Comprobar si hay una sesión activa cuando el componente se monta
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const sessionActive = await checkSession();
        console.log('Session active:', sessionActive); // Verifica si la sesión está activa
        setIsLoggedIn(sessionActive);
        if (sessionActive) {
          const currentUser = await getCurrentUser();
          console.log('Current User:', currentUser);  // Imprime el usuario actual
          setUser(currentUser);  // Actualiza el usuario global
        }
      } catch (error) {
        console.error('Error checking session:', error);
      }
    };
    checkUserSession();
  }, [isLoggedIn]);  // Esto permite que el efecto se ejecute cada vez que cambie el estado de la sesión

  // Función para manejar iniciar/cerrar sesión
  const handleAuthAction = async () => {
    if (isLoggedIn) {
      // Confirmar que el usuario quiere cerrar sesión
      Alert.alert(
        "Cerrar sesión",
        "¿Estás seguro de que deseas cerrar sesión?",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "Cerrar sesión",
            onPress: async () => {
              try {
                if (account) {  // Verifica que account esté inicializado
                  // Cerrar la sesión en el backend
                  await account.deleteSession('current');
                  console.log("Sesión cerrada correctamente");
                  // Actualizar estado del frontend
                  setIsLoggedIn(false);
                  setUser(null);
                  // Redirigir a la página de inicio de sesión
                  router.replace('/home');
                } else {
                  throw new Error("La instancia de account no está disponible.");
                }
              } catch (error) {
                console.error("Error al cerrar sesión:", error.message);
                Alert.alert('Error', 'Hubo un problema al cerrar sesión. Intenta de nuevo.');
              }
            }
          }
        ]
      );
    } else {
      router.push('/sign-in');  // Redirigir a la página de inicio de sesión
    }
  };

  const navigateToHome = () => {
    router.replace('/home');
  };

  const navigateToPlans = () => {
    router.push('/PlansPage');  // Redirige a la página PlansPage
  };

  const navigateToUnderConstruction = () => {
    router.push('/UnderConstruction');  // Redirige a la página en construcción
  };

  return (
    <>
      {/* Barra de estado */}
      <StatusBar backgroundColor='#000000' barStyle="light-content" /> 
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
                source={require('../assets/icon/menu.png')}  // Asegúrate de que la ruta a la imagen sea correcta
                style={{ width: 30, height: 30 }}  // Ajusta el tamaño según sea necesario
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
              {isLoggedIn ? 'Cerrar sesión' : 'Iniciar Sesión'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Drawer Menu separado */}
      <DrawerMenu
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        navigateToPlans={navigateToPlans}
        navigateToUnderConstruction={navigateToUnderConstruction}
      />
    </>
  );
}
