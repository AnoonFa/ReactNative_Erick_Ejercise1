import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images} from '../../constants';
import FormField from '../../components/FormField';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SingIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''

  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {



  }


  return (
    <SafeAreaView  className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center 
        min-h-[83vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold ">
            Log in to Aora
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e)=> setForm({...form,
              email:e})}
              otherStyle="mt-7"
              keyboardType="email-address"
  
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e)=> setForm({...form,
              password: e})}
              otherStyle="mt-7"
              
          />
          <CustomButton
          title="Sing In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sing-up" className="text-lg font-psemibold text-secondary">
            Sing Up
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SingIn