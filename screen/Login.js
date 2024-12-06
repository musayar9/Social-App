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

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.subHead}>Hello Again! </Text>
          <Text style={styles.subtitle}>Welcome back you've been missed!</Text>
        </View>
        <View style={styles.formContent}>
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
        <TouchableOpacity style={styles.recoveryContent}>
          <Text style={styles.recoveryPass}>Recovery Password</Text>
        </TouchableOpacity>

        <CustomButton title={"Login"} style={styles.loginBtn} />
        <Continue />
        <OAuth />
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
    fontSize: 28,
    textAlign: "center",
    paddingHorizontal: 60,
  },
  formContent: {
    marginTop: 30,
    paddingVertical: 15,
    gap: 12,
    alignItems: "center",
  },
  recoveryContent: {},

  recoveryPass: {
    textAlign: "right",
    paddingRight: 25,
    fontSize: 16,
    color: "#4b5563",
    fontWeight: "600",
  },
  loginBtn: {
    marginTop: 40,
  },
});
