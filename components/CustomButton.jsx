import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ title, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fd6b68",
    marginHorizontal: 25,
    borderRadius: 12,
  },
  buttonText: {
    padding: 15,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
