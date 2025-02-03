import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchScreen = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue sur l'écran de recherche</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});