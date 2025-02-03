import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue sur l'écran d'accueil</Text>
      <Button title="Aller à la bibliothèque" onPress={() => navigation.navigate('Library')} />
    </View>
  );
};

export default HomeScreen;

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