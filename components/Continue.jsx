import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Continue = () => {
  return (
    <View style={styles.continueContext}>
      <Text style={styles.line}></Text>
      <Text style={styles.continueText}>Or continue with</Text>
      <Text style={styles.line}></Text>
    </View>
  );
};

export default Continue;

const styles = StyleSheet.create({
  continueContext: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 45,


  },
  continueText: {
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#010101",
  },
  line: {
    borderWidth: 1,
    borderColor: "##a1a1aa",
    width: 80,
    height: 0,
  },
});
