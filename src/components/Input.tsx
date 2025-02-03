import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText }) => {
  const styles = StyleSheet.create({
    input: {
      padding: 10,
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
  });

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;