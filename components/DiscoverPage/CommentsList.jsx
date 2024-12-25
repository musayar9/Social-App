import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { hp, wp } from "../../helper/common";
import moment from "moment";

const CommentsList = ({ item }) => {
  const formattedTime = moment(item.createdAt).fromNow(true);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.commentInfo}>
          <Image
            source={{ uri: item?.commentProfileImage }}
            alt="profile Image"
            style={styles.profileImage}
          />
          <View style={styles.commentDetail}>
            <View style={styles.commentInfo}>
              <Text style={styles.commentUserText}>{item?.commentUser}</Text>
              <Text style={styles.commentDt}>{formattedTime}</Text>
            </View>

            <Text style={styles.commentText}>{item?.comment}</Text>
            <Text style={styles.answer}>Yanıtla</Text>
          </View>
        </View>
        <View style={styles.likes}>
          <Entypo name="heart-outlined" size={20} color="black" />
          <Text>{item?.like}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CommentsList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
   
    marginHorizontal: wp(0.2),
    marginVertical: hp(0.5),
    borderRadius:12
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal:10
  },
  commentInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  commentUserText: {
    fontSize: hp(1.5),
    fontWeight: "600",
  },
  commentDt: {
    fontSize: hp(1.3),
    color: "#94a3b8",
  },
  commentDetail: {
    width: "80%",
  },
  commentText: {
    flexWrap: "wrap",
    fontSize: hp(1.7),
  },
  answer: {
    fontSize: hp(1.6),
    color: "#94a3b8",
  },
  likes: { alignItems: "center" },
  profileImage: { width: wp(12), height: wp(12), borderRadius: wp(6) },
});
