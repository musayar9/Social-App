import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { hp, wp } from "../helper/common";

const Home = () => {
  const [activeButton, setActiveButton] = useState("login");
  useEffect(() => {
    setActiveButton("login");
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/socialapps.png")}
        style={styles.image}
      />
      <View style={styles.textContent}>
        <Text style={styles.subHead}>Discover Word</Text>
        <Text style={styles.subHead}>Everyone is Here Now</Text>
        <Text style={styles.subtitle}>
          Discover new friendships, strengthen your bonds, and create memories!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("register");
          }}
          style={[
            styles.buttons,
            {
              backgroundColor: activeButton === "login" && "#e2e8f0",
            },
          ]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttons,
            {
              backgroundColor: activeButton === "register" && "#e2e8f0",
            },
          ]}
          onPress={() => navigation.navigate("login")}
          onPressIn={() => setActiveButton("login")}
          onPressOut={() => setActiveButton(null)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cbd5e1",
    gap: 5,
    // paddingVertical:100
  },
  image: {
    width: wp(100),
    height: hp(50),
  },

  textContent: {
    alignItems: "center",
    paddingVertical: hp(1.5),
  },
  subHead: {
    color: "#334155",
    fontSize: hp(3.5),
    fontWeight: "bold",
  },
  subtitle: {
    color: "#334155",
    fontSize: hp(2),
    textAlign: "center",
    paddingVertical: hp(3),
    paddingHorizontal: wp(8),
  },

  buttonContainer: {
    marginTop: hp(2),
    // flex:1,
    flexDirection: "row",

    width: "75%",
    borderColor: "#FFF",
    borderWidth: 2,
    height: hp(6.8),
    borderRadius: 15,
  },

  buttons: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "50%",
    borderRadius: 15,
  },
  buttonText: {
    color: "#374151",
    fontSize: hp(2),
    textAlign: "center",
  },
});
