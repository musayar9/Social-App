import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Feather from "@expo/vector-icons/Feather";
import { hp, wp } from "../helper/common";
import { faker } from "@faker-js/faker";
import StoryList from "../components/HomePage/StoryList";
import Post from "../components/HomePage/Post";
import { StatusBar } from "expo-status-bar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const HomePage = () => {
  const { user } = useSelector((state) => state.user);
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(collection(db, "socialApp"));
        data.forEach((doc) => {
          setFetchData([...fetchData, { id: doc.id, ...doc.data() }]);
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);
  console.log("fetchData", fetchData);
  const stories = Array(40)
    .fill(0)
    .map(() => ({
      id: faker.string.uuid(),
      avatar: faker.image.urlPicsumPhotos(),
      name: faker.person.firstName(),
    }));

  const renderItem = (itemData) => {
    return <StoryList {...itemData.item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Social </Text>
          <View style={styles.icon}>
            <Feather name="download-cloud" size={20} color="#475569" />
            <Text style={styles.redDot}></Text>
          </View>
        </View>
        {/* <Image
          source={{ uri: fetchData[0].image.uri }}
          alt="image"
          style={{ width: 80, height: 80 }}
        /> */}

        <View>
          <FlatList
            horizontal
            data={stories}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>

        <Post />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp(4),
    backgroundColor: "#ffffff",
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
    fontWeight: "600",
  },
  icon: {
    width: wp(10),
    height: hp(5.2),
    borderWidth: 1,
    borderColor: "#cbd5e1",
    alignItems: "center",
    justifyContent: "center",
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
  postContainer: {
    flex: 1,
  },
});
