/// <reference path="../../node_modules/@types/react-native/index.d.ts" />
import { StyleSheet } from "react-native";

const Colors = {
  // App Theme
  primary: "#1DB954",
  secondary: "#8BC34A",
  tertiary: "#FFD600",
  background: "#F0F0F0",
  text: "black",

  // Other Colors
  white: "#FFFFFF",
  black: "#000000",
  gray: "#808080",
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",

  // Gradients
  primaryGradient: ["#1DB954", "#8BC34A"],
  secondaryGradient: ["#FFD600", "#F0F0F0"],

  // Opacity
  transparent: "transparent",
  opacity25: "rgba(0, 0, 0, 0.25)",
  opacity50: "rgba(0, 0, 0, 0.5)",
  opacity75: "rgba(0, 0, 0, 0.75)",

  // Shadows
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  shadowOffset: { width: 0, height: 2 },
  shadowColor: "black",

  // Border
  borderWidth: 1,
  borderColor: "gray",
  borderRadius: 5,
};

export default Colors;