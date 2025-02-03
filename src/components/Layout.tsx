import { View, StyleSheet } from 'react-native';

const Layout = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  });

  return <View style={styles.container}>{children}</View>;
};

export default Layout;