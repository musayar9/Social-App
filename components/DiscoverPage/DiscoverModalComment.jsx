import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CommentsList from "./CommentsList";
import { hp, wp } from "../../helper/common";

const DiscoverModalComment = ({ comment }) => {
  const renderItem = ({ item }) => {
    return <CommentsList item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.commentHeader}>Yorumlar</Text>

      <FlatList
        data={comment}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.commentList}
        keyboardShouldPersistTaps="handled"
        style={{ height: hp(40) }}
      />
    </View>
  );
};

export default DiscoverModalComment;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: hp(1),
    paddingHorizontal: wp(2),
    gap:hp(1)
  },
  commentHeader: {
    fontSize: hp(2),
    fontWeight: "bold",
    textAlign: "center",
  },
  commentList: {
    paddingBottom: hp(10),
   
  },
});
