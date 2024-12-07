import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";

const CustomButton = ({ title, style, handleSubmit }) => {
  return (
    <TouchableOpacity onPress={handleSubmit} activeOpacity={0.7} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fd6b68",
    marginHorizontal: wp(5.4),
    borderRadius: 12,
  },
  buttonText: {
    padding: wp(3.4),
    textAlign: "center",
    fontSize: hp(2),
    fontWeight: "bold",
    color: "#fff",
  },
});
