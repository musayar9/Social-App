import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { startAfter } from "firebase/firestore";
import Feather from "@expo/vector-icons/Feather";
import { hp, wp } from "../helper/common";
import { faker } from "@faker-js/faker";
const HomePage = () => {
  const { user } = useSelector((state) => state.user);

  const stories = Array(40)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      avatar: faker.image.urlPicsumPhotos(),
      name: faker.person.firstName(),
    }));

  console.log("stoties", stories);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Social </Text>
        <View style={styles.icon}>
          <Feather name="download-cloud" size={20} color="#475569" />
          <Text style={styles.redDot}></Text>
        </View>
      </View>

      <FlatList
        horizontal
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 4, alignItems:"center" }}>
            <Image
              source={{ uri: item.avatar }}
              alt={item.name}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: "#facc15",
              }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
  },
  headerText: {
    color: "#111",
    fontSize: hp(3.5),
    fontWeight: 600,
  },
  icon: {
    width: wp(10),
    height: hp(5.5),
    borderWidth: 1,
    borderColor: "#cbd5e1",
    alignItems: "center",
    borderRadius: 25,
    padding: 5,
    position: "relative",
  },
  redDot: {
    width: wp(2.7),
    height: hp(1.3),
    backgroundColor: "red",
    border: 5,
    borderRadius: 30,
    borderColor: "red",
    position: "absolute",
    top: 0,
    right: 2,
  },
});
