import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";

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
    marginVertical: hp(4.5),
  },
  continueText: {
    paddingHorizontal: wp(3.4),
    fontSize: hp(2),
    color: "#64748b",
  },
  line: {
    borderWidth: 1,
    borderColor: "#64748b",
    width: 80,
    height: 0,
  },
});
