import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
const OAuth = () => {
  return (
    <View style={styles.authContent}>
      <Image style={styles.authIcons} source={require("../assets/google.png")} />
      <Ionicons name={"logo-apple"} size={30} color={"#a1a1aa"} />
      <Image source={require("../assets/facebook.png")} />
    </View>
  );
}

export default OAuth

const styles = StyleSheet.create({
  authContent:{
  alignItems:"center",
  flexDirection:"row",
  justifyContent:"space-between",
  marginHorizontal:50
  },
  authIcons:{
  
  }
  
});