import { View, Text, Image } from 'react-native'
import {Tabs, Redirect} from 'expo-router'

import {icons} from '../../constants'




const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#cdcde00',
        tabBarStyle:{
          
          height:0,
        }
        
        }}>
      <Tabs.Screen
        name="home"  
        options={{
          title: 'Home',
          headerShown: false,
          
        }}
      />
      <Tabs.Screen
        name="bookmark"  
        options={{
          title: 'Bookmark',
          headerShown: false,
          
        }}
      />
      <Tabs.Screen
        name="UnderConstruction"  
        options={{
          title: 'UnderConstruction',
          headerShown: false,
          
        }}
      />
      <Tabs.Screen
        name="profile"  
        options={{
          title: 'Profile',
          headerShown: false,
        
        }}
      />
    </Tabs>
  )
}

export default TabsLayout