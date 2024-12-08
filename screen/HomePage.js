import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { startAfter } from "firebase/firestore";

const HomePage = () => {
  const { user } = useSelector((state) => state.user);
  console.log("user", user);
  return (
    <View>
      <Text>HomePagehome </Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
