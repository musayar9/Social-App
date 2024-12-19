import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";
import Entypo from "@expo/vector-icons/Entypo";
import SearchForm from "../components/SearchForm";

const Discover = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <SearchForm value={"search"} title={"text"} placeholder={"Search"} />
        <Entypo name="dots-three-horizontal" size={24} color="#94a3b8" />
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: hp(8) },
  searchArea: {
    paddingHorizontal: wp(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
