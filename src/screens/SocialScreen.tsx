import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SocialScreen = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue sur l'écran social</Text>
    </View>
  );
};

export default SocialScreen;

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