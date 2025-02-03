import { Alert, Platform } from "react-native";

export const showAlert = (title: string, message: string) => {
  Alert.alert(
    title,
    message,
    [{ text: "OK", onPress: () => {} }],
    { cancelable: false }
  );
};

export const isIOS = Platform.OS === "ios";