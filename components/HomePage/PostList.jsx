import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../../helper/common";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import moment from "moment";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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

      {/* icons area */}
      <View style={styles.postFooter}>
        <View style={styles.postIcons}>
          <Entypo name="heart" size={24} color="red" />
          <AntDesign name="smile-circle" size={24} color="#eab308" />
          <FontAwesome6 name="hands-clapping" size={24} color="#fecaca" />

          <View>
            <Text style={{ fontWeight: "bold", color: "#111", fontSize: 16 }}>
              {"Cutsyifa"} <Text style={{ color: "#94a3b8" }}>and</Text> 128K
              others
            </Text>
          </View>
        </View>

        <View style={styles.postIcons}>
          <AntDesign name="like1" size={24} color="#1d4ed8" />
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={24}
            color="#94a3b8"
          />
        </View>
      </View>
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
    borderRadius: 16,
  },

  postFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(2),
  },
  postIcons: {
    flexDirection: "row",
    gap: 8,
  },
});
