import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../../helper/common";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import moment from "moment";

const PostList = ({ item }) => {
  const formattedTime = moment(item.createdAt).fromNow(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContent}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.profileImage}
            source={{ uri: item.profileImage }}
            alt={item.userName}
          />
          <View>
            <Text style={styles.headerLeftText}>{item.userName}</Text>
            <View style={styles.dateContent}>
              <Text style={styles.date}>{formattedTime} ago</Text>
              <Entypo name="dot-single" size={24} color="#64748b" />
              <AntDesign name="earth" size={16} color="#64748b" />
            </View>
          </View>
        </View>

        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <View style={styles.postBody}>
        <View style={styles.postHeader}>
          <Text style={styles.postWriter}>
            {item.userName}{" "}
            <Text style={styles.postSentence}>{item.postSentence}</Text>
          </Text>
        </View>
        <Image
          style={styles.postImage}
          source={{ uri: item.postImage }}
          alt={item.userName}
        />
      </View>
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingVertical: hp(1.4),
    paddingHorizontal: wp(4),
    gap: 8,
    
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  headerLeftText: {
    fontSize: hp(1.8),
    color: "#111",
    fontWeight: "600",
  },
  dateContent: { flexDirection: "row", alignItems: "center" },

  date: {
    color: "#64748b",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  postBody: { paddingHorizontal: wp(1) },
  postWriter: {
    fontWeight: "bold",
  },
  postSentence: { color: "#475569", fontWeight: 400 },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  postImage: {
    width: "100%",
    height: hp(20),
    marginVertical: hp(1),
    borderRadius:12
  },
});
