import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { hp, wp } from "../helper/common";
const SearchForm = ({ value, title, placeholder, handleChange, style }) => {
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
              <Ionicons name={"eye"} size={20} color={"#334155"} />
            ) : (
              <Ionicons name={"eye-off"} size={20} color={"#a1a1aa"} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  inputContainer: {
    // borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(1),
    width: wp(80),
    marginVertical:hp(1)
  },

  textInput: {
    // flex: 1,
    width: "100%",
    fontSize: 15,
  },
});
