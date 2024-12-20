import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
const TabIcon = ({ icon, color, name, focused, size }) => {
  return (
    <View style={styles.iconContainer}>
      <Ionicons name={icon} color={color} size={size || 24} />
      {/* <Text style={[styles.iconText, { color: focused ? "#111" : "#cbd5e1" }]}>
        {name}
      </Text> */}
      {/* <Text>{name}</Text> */}
    </View>
  );
};

export default TabIcon

const styles = StyleSheet.create({
 
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 14,
    gap: 2,
  },
  iconText: {
    fontSize: 8,
    marginTop: 4,
  },
});
