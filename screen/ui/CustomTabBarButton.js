import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      width: 58,
      height: 58,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#facc15",
      borderRadius: 33,
      marginTop: -20,
      borderWidth: 3,
      borderColor: "white",
      color: "white",
      zIndex: 10,
    }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);
export default CustomTabBarButton

const styles = StyleSheet.create({})