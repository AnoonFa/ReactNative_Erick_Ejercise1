import { Text, View } from 'react-native';
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (

    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl" >Aor ADSO!</Text>
      <StatusBar style='auto' />
      <Link href="/profile" style={{color: 'blue'}}>Go to profile</Link>
    </View>


  )
  

}

