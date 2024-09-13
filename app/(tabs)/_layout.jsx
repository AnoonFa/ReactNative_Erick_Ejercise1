import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{ 
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          height: 0,
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
        name="UnderConstruction"
        options={{
          title: 'UnderConstruction',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="PlansPage"  // Registering the new PlansPage screen
        options={{
          title: 'PlansPage',
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
  );
};

export default TabsLayout;
