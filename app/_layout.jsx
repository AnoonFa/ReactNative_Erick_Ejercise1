import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View} from "react-native";
import {  SplashScreen, Stack} from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "../context/GlobalProvider";

// evita que la pantalla de inicio se oculte automaticamente antes de que se complete la carga 
SplashScreen.preventAutoHideAsync();

const RootLayout = () =>{
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/font/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/font/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/font/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/font/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/font/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/font/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/font/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/font/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/font/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    //si hay un error tira  el error
    if(error) throw error;
    //si los fuentes se cargan, esconde la pantalla de carga en pantalla completa
    if(fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error]);
  //si las funtes estan cargadas y no hay ningun erorr devuelve nada
  if(!fontsLoaded && !error)return null;

  return( 
    
    <GlobalProvider> 
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="/search/[query]" options={{ headerShown: false }} />
      </Stack>
      
    </GlobalProvider>

  );
}


export default RootLayout;


