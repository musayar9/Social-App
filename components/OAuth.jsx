import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const OAuth = () => {
  return (
    <View style={styles.authContent}>
      <TouchableOpacity style={styles.iconContent}>
        <Image
          style={styles.authIcons}
          source={require("../assets/google.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContent}>
        <Ionicons
          style={styles.authIcons}
          name={"logo-apple"}
          size={40}
          color={"#a1a1aa"}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContent}>
        <Image
          style={styles.authIcons}
          source={require("../assets/facebook.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OAuth;

const styles = StyleSheet.create({
  authContent: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
    marginVertical:10
  },
  iconContent: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 12,
  },
  authIcons: {
    width: 40,
    height: 40,
  },
});
