import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { hp, wp } from "../../helper/common";
import Feather from "@expo/vector-icons/Feather";
import DiscoverModal from "./DiscoverModal";
const DiscoverList = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable
        onPress={() => {
          setModalVisible(true), setSelectedItem(item);
        }}
      >
        <View style={styles.discoverContent}>
          <Image
            source={{ uri: item.postImage }}
            alt="discover"
            style={styles.imageStyle}
          />
          <View style={styles.player}>
            <Feather name="play" size={24} color="#ffffff" />
            <Text style={{ color: "#ffffff" }}>{item.player}</Text>
          </View>
        </View>
      </Pressable>

  
        <DiscoverModal
          setModalVisible={setModalVisible}
          selectedItem={selectedItem}
          modalVisible={modalVisible}
        />

    </SafeAreaView>
  );
};

export default DiscoverList;

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: wp(0.7),
    marginVertical: hp(0.5),
  },
  imageStyle: {
    // width: 125,
    width: wp(30),
    height: hp(28),
    borderRadius: 14,
    objectFit: "cover",
  },
  discoverContent: {
    position: "relative",
  },
  player: {
    position: "absolute",
    bottom: hp(1),
    left: wp(2),
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
  },
});
