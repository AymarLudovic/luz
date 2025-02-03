import { Modal, StyleSheet, View } from 'react-native';

const Modal = ({ visible, children }) => {
  const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 5,
    },
  });

  return (
    <Modal visible={visible} animationType='fade'>
      <View style={styles.modal}>
        <View style={styles.content}>{children}</View>
      </View>
    </Modal>
  );
};

export default Modal;