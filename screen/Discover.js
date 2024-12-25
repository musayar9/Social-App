import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../helper/common";
import Entypo from "@expo/vector-icons/Entypo";
import SearchForm from "../components/SearchForm";
import { faker } from "@faker-js/faker";
import { FlatList } from "react-native";
import DiscoverList from "../components/DiscoverPage/DiscoverList";
const Discover = () => {
  const comment = Array(5)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      comment: faker.lorem.sentence(),
      commentUser: faker.person.fullName(),
      commentProfileImage: faker.image.avatar(),
      createdAt: faker.date.soon(),
      like: faker.number.int({ min: 0, max: 99 }),
    }));
  const discover = Array(40)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      userName: faker.person.fullName(),
      profileImage: faker.image.avatar(),
      like: faker.number.int({ min: 10, max: 1000 }),
      comments: faker.number.int({ min: 0, max: 125 }),
      share: faker.number.int({ min: 5, max: 50 }),
      postImage: faker.image.urlPicsumPhotos(),
      player: faker.number.int({ min: 20, max: 900 }),
      comment: comment,
    }));

  const renderDiscover = (itemData) => {
    return <DiscoverList item={itemData.item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <SearchForm value={"search"} title={"text"} placeholder={"Search"} />
        <Entypo name="dots-three-horizontal" size={24} color="#94a3b8" />
      </View>
      <View style={styles.discoverList}>
        <FlatList
          data={discover}
          keyExtractor={(item) => item.id}
          renderItem={renderDiscover}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: hp(8), backgroundColor: "#ffffff" },
  searchArea: {
    paddingHorizontal: wp(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  discoverList: {
    paddingVertical: wp(2),

    alignItems: "center",
    justifyContent: "center",
  },
});
