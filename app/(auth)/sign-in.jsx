import { View, Text, Image, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { Link, useRouter } from 'expo-router';
import { signIn } from '../../lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const session = await signIn(form.email, form.password);
      if (session) {
        router.replace('/home'); // Redirigir solo si las credenciales son correctas
      }
    } catch (error) {
      console.error('Error during signIn:', error.message);
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
        <View className="w-full min-h-[85vh] px-4 items-center ">

          {/* Centered image with better size */}
          <View className="w-full flex items-center justify-center ">
            <Image 
              source={images.david} 
              resizeMode='contain' 
              className="w-[180px] h-[180px] rounded-full border-2 border-secondary-100" // Updated image styling
            />
          </View>

          {/* Header Text */}
          <Text className="text-3xl text-black font-psemibold text-center mb-5">
            Inicia Sesión
          </Text>

          {/* Email FormField */}
          <FormField 
            title="Correo"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4 w-full"
            keyboardType="email-address"
            inputStyle={{ color: 'black', backgroundColor: '#f5f5f5', borderRadius: 10, padding: 12 }} // Improved input field style
          />

          {/* Password FormField */}
          <FormField 
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4 w-full"
            secureTextEntry
            inputStyle={{ color: 'black', backgroundColor: '#f5f5f5', borderRadius: 10, padding: 12 }} // Improved input field style
          />

          {/* Sign In Button */}
          <CustomButton 
            title="Iniciar sesión"
            handlePress={submit}
            containerStyles="mt-8 w-full bg-secondary-100 py-4 rounded-full" // Enhanced button styling
            isLoading={isSubmitting}
          />

          {/* Sign Up Link */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black-100 font-pregular">
              ¿No tienes una cuenta?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary-100">
              Regístrate
            </Link>
          </View>
                    {/* Back Link at the bottom */}
                    <View className="w-full flex items-center mt-8">
            <Link href="/home" className="text-lg font-pregular text-gray-100 underline">
              Volver
            </Link>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default SignIn;
