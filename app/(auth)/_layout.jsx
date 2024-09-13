import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"  // Corrected from "sing-in" to "sign-in"
          options={{
            headerShown: false,  // Hide the header
          }}
        />
        <Stack.Screen
          name="sign-up"  // Corrected from "sing-up" to "sign-up"
          options={{
            headerShown: false,  // Hide the header
          }}  
        />
      </Stack>

      <StatusBar backgroundColor='#161622' style='light' />
    </>
  );
};

export default AuthLayout;
