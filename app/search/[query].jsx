import React from 'react';
import { View, Text } from 'react-native';
import { useRouter, useRoute } from 'expo-router';

const SearchScreen = () => {
  const route = useRoute();
  const { query } = route.params;

  return (
    <View>
      <Text>Search Results for: {query}</Text>
    </View>
  );
};

export default SearchScreen;
