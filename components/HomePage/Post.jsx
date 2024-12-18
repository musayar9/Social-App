import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { faker } from "@faker-js/faker";
import PostList from "./PostList";

const Post = () => {
  const post = Array(12)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      createdAt: faker.date.soon(),
      profileImage: faker.image.avatar(),
      userName: faker.person.fullName(),
      postSentence: faker.lorem.sentence(),
      postParagraph: faker.lorem.paragraph(),
      postImage: faker.image.urlPicsumPhotos(),
      likes: faker.number.int({ min: 10, max: 1000 }),
      comments: faker.number.int({ min: 0, max: 125 }),
      share: faker.number.int({ min: 5, max: 50 }),
    }));

  const renderPost = (itemData) => {
    return <PostList item={itemData.item} />;
  };

  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.id}
      renderItem={renderPost}
      contentContainerStyle={styles.listContainer}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};

export default Post;

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  footer: {
    height: 120,
  },
});
