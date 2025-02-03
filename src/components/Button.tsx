import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = ({ title, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      padding: 10,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;