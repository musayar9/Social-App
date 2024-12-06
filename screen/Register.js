import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import Continue from "../components/Continue";
import OAuth from "../components/OAuth";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [form, setForm] = useState({
  email:"",
    username: "",
    password: "",
  });
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.subHead}>Discover Word </Text>
          <Text style={styles.subtitle}>
            Discover new friendships, strengthen your bonds, and create
            memories!
          </Text>
        </View>
        <View style={styles.formContent}>
          <FormField
            value={form.username}
            title={"email"}
            placeholder={"Enter Email"}
            handleChange={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            value={form.username}
            title={"text"}
            placeholder={"Enter username"}
            handleChange={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            value={form.password}
            title="password"
            placeholder="Password"
            handleChange={(e) => setForm({ ...form, password: e })}
          />
        </View>

        <CustomButton title={"Register"} style={styles.loginBtn} />
        <Continue />
        <OAuth />
        <View style={styles.checkMember}>
          <Text style={styles.checkText}>Do you have an account</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.register}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#cbd5e1",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {},
  textContainer: {
    alignItems: "center",
    gap: 8,
  },
  subHead: {
    color: "#334155",
    fontWeight: "bold",
    fontSize: 40,
  },
  subtitle: {
    color: "#334155",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 50,
  },
  formContent: {
    marginTop: 20,
    paddingVertical: 15,
    gap: 12,
    alignItems: "center",
  },
  recoveryContent: {},
  loginBtn: {
    marginTop: 30,
  },

  checkMember: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    gap: 2,
  },
  checkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#71717a",
  },
  register: {
    fontWeight: 600,
    fontSize: 16,
    color: "#3b82f6",
  },
});
