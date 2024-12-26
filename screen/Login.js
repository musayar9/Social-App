import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,

  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import Continue from "../components/Continue";
import OAuth from "../components/OAuth";
import { useNavigation } from "@react-navigation/native";
import { hp, wp } from "../helper/common";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, login } from "../redux/userSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const { user, token, isLoading } = useSelector((state) => state.user);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log("user", user);
  console.log("token", token);

  // useEffect(() => {
  //   dispatch(autoLogin());
  // }, []);

  if (isLoading) {
    return <ActivityIndicator size={24} color={"green"} />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.screen}>
        <ScrollView style={{height:"100%"}}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.subHead}>Hello Again! </Text>
              <Text style={styles.subtitle}>
                Welcome back you've been missed!
              </Text>
            </View>
            <View style={styles.formContent}>
              <FormField
                value={form.email}
                title={"text"}
                placeholder={"Enter email"}
                handleChange={(e) => setForm({ ...form, email: e })}
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

            <CustomButton
              title={"Login"}
              style={styles.loginBtn}
              handleSubmit={() =>
                dispatch(
                  login({ username: form.email, password: form.password })
                )
              }
            />
            <Continue />
            <OAuth />
            <View style={styles.checkMember}>
              <Text style={styles.checkText}>Not a member?</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("register")}
              >
                <Text style={styles.register}>Register now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#cbd5e1",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(10),
    // height: "100%",
  },

  container: {
    // flex: 1,
    // backgroundColor: "#cbd5e1",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingVertical: hp(10),
    // height:"100%"
  },
  textContainer: {
    alignItems: "center",
    gap: 8,
  },
  subHead: {
    color: "#334155",
    fontWeight: "bold",
    fontSize: hp(4.5),
  },
  subtitle: {
    color: "#334155",
    fontSize: hp(2.5),
    textAlign: "center",
    paddingHorizontal: wp(18),
  },
  formContent: {
    marginTop: hp(3.2),
    paddingVertical: hp(1.8),
    gap: 12,
    alignItems: "center",
  },
  recoveryContent: {},

  recoveryPass: {
    textAlign: "right",
    marginRight: wp(5.2),
    // paddingRight: wp(6.5),
    fontSize: hp(1.8),
    color: "#4b5563",
    fontWeight: "600",
  },
  loginBtn: {
    marginTop: hp(4),
  },

  checkMember: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: hp(4),
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
