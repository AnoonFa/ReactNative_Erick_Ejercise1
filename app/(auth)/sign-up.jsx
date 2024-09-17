import { View, Text, Alert, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { Link, useRouter } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);
    try {
      const newUser = await createUser(form.email, form.password, form.username);
      if (newUser) {
        router.replace("/sign-in");
      }
    } catch (error) {
      console.error('Error during signUp:', error.message);
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">

          {/* Centered Image */}
          <View className="w-full flex items-center justify-center ">
            <Image 
              source={images.david}
              resizeMode='contain'
              className="w-[180px] h-[180px] rounded-full border-2 border-secondary-100"
            />
          </View>

          {/* Header Text */}
          <Text className="text-3xl text-black font-psemibold text-center mb-8">
            Registrate
          </Text>

          {/* Username FormField */}
          <FormField 
            title="Nombre de Usuario"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-4 w-full"
            inputStyle={{ color: 'black', backgroundColor: '#f5f5f5', borderRadius: 10, padding: 12 }}
          />
          
          {/* Email FormField */}
          <FormField 
            title="Correo"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4 w-full"
            keyboardType="email-address"
            inputStyle={{ color: 'black', backgroundColor: '#f5f5f5', borderRadius: 10, padding: 12 }}
          />
          
          {/* Password FormField */}
          <FormField 
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4 w-full"
            secureTextEntry
            inputStyle={{ color: 'black', backgroundColor: '#f5f5f5', borderRadius: 10, padding: 12 }}
          />
          
          {/* Sign Up Button */}
          <CustomButton 
            title="Registrate"
            handlePress={submit}
            containerStyles="mt-8 w-full bg-secondary-100 py-4 rounded-full"
            isLoading={isSubmitting}
          />

          {/* Sign In Link */}
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black-100 font-pregular">
              ¿Ya tienes una cuenta?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary-100">
              Inicia sesión
            </Link>
          </View>
                              {/* Back Link at the bottom */}
                              <View className="w-full flex items-center mt-8">
            <Link href="/home" className="text-lg font-pregular text-gray-100 underline">
              Volver
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
