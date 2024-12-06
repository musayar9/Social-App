import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { hp, wp } from "../helper/common"; // Yüzde tabanlı boyutlandırma fonksiyonlarınız

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
          size={wp(10)} // Icon boyutu yüzde tabanlı olacak
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
    justifyContent: "center",
    gap: wp(3), // Aradaki boşluk yüzdeye göre ayarlanır
    marginHorizontal: wp(10),
    marginVertical: hp(2),
  },
  iconContent: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: wp(5), // Yüzde tabanlı padding
    paddingVertical: hp(1),
    borderRadius: wp(3), // Yüzde tabanlı köşe yuvarlatma
  },
  authIcons: {

    width: wp(10),
    height: hp(5.5),
  },
});
