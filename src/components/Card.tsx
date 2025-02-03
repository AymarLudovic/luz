import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => {
  const styles = StyleSheet.create({
    card: {
      padding: 10,
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
  });

  return <View style={styles.card}>{children}</View>;
};

export default Card;