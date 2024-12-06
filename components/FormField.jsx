import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const FormField = ({ value, title, placeholder, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          secureTextEntry={title === "password" && !showPassword}
          onChangeText={handleChange}
        />

        {title === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Ionicons name={"eye"} size={24} color={"#334155"} />
            ) : (
              <Ionicons name={"eye-off"} size={24} color={"#a1a1aa"} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  inputContainer: {
    // borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 350,
  },

  textInput: {
    // flex: 1,

    fontSize: 18,
  },
});
