import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [activeButton, setActiveButton] = useState("login");
  const navigation = useNavigation()
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
        onPress={()=>{navigation.navigate("/register")}}
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
          onPress={()=>navigation.navigate("login")}
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
    gap:10
    // paddingVertical:100
  },
  image: {
    width: 350,
    height: 350,
  },

  textContent: {
    alignItems: "center",
    paddingVertical: 10,
  },
  subHead: {
    color: "#334155",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#334155",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  buttonContainer: {
    marginTop: 25,
    // flex:1,
    flexDirection: "row",

    width: "75%",
    borderColor: "#FFF",
    borderWidth: 2,
    height: 60,
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
    fontSize: 18,
    textAlign: "center",
  },
});
