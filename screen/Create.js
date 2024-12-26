import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "../helper/common";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FormField from "../components/FormField";
import SearchForm from "../components/SearchForm";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
const Create = () => {
  const { user } = useSelector((state) => state.user);

  const [formData, setFormaData] = useState({
    description: "",
    image: null,
    prompt: "",
  });

  const openPicker = async (selectType) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const pickedFile = result.assets[0];
      const fileStatus = {
        fileName: pickedFile.fileName || "unknown",
        mimeType: pickedFile.type,
        fileSize: pickedFile.fileSize || 0,
        uri: pickedFile.uri,
      };
      setFormaData({ ...formData, image: fileStatus });
    } else {
      setTimeout(() => {
        Alert.alert("Document Picked", JSON.stringify(result, null, 2));
      }, 100);
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      return Alert.alert("User Id Not found, please login");
    }

    if (!formData.description || !formData.image || !formData.prompt) {
      return Alert.alert("Please fill all the fields");
    }

    try {
      const response = await addDoc(collection(db, "socialApp"), {
        description: formData.description,
        image: formData.image,
        prompt: formData.prompt,
        userId: user.uid,
        createdAt: new Date(),
      });
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
  console.log("formData", formData);
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headText}>Create Post</Text>
          <MaterialIcons name="post-add" size={30} color="#facc15" />
        </View>

        <View style={styles.description}>
          <Text style={styles.descripText}>Description</Text>
          <SearchForm
            value={formData.description}
            title="Description"
            placeholder={"Enter Description"}
            style={styles.descriptionForm}
            handleChange={(e) => setFormaData({ ...formData, description: e })}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.descripText}>Image</Text>
          <TouchableOpacity onPress={() => openPicker("image")}>
            {formData.image ? (
              <Image
                source={{ uri: formData.image.uri }}
                resizeMode="contain"
                style={styles.image}
              />
            ) : (
              <View style={styles.uploadImage}>
                <AntDesign
                  name="upload"
                  size={30}
                  color="#facc15"
                  style={{ fontWeight: "bold" }}
                />
                <Text style={{ fontWeight: "600", color: "#facc15" }}>
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.description}>
          <Text style={styles.descripText}>Prompt</Text>
          <SearchForm
            value={formData.prompt}
            title="Prompt"
            placeholder={"Enter Prompt"}
            style={styles.prompt}
            handleChange={(e) => setFormaData({ ...formData, prompt: e })}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.uploadBtn}
          onPress={handleSubmit}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Upload</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
    // height: "100%",
    flex: 1,
    paddingVertical: hp(2),
  },
  container: {
    // flex: 1,

    paddingHorizontal: wp(4),
  },

  header: {
    paddingBottom: hp(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headText: {
    fontSize: hp(3),
    fontWeight: "600",
  },
  descriptionForm: {
    width: "100%",
    height: hp(10),
  },
  prompt: {
    width: "100%",
    height: hp(8),
  },

  description: {
    paddingVertical: hp(1),
    gap: hp(1.2),
  },
  descripText: {
    paddingLeft: wp(1),
    fontSize: hp(2.4),
  },

  image: {
    borderWidth: 2,
    borderColor: "#f1f5f9",
    backgroundColor: "#f1f5f9",
    width: "100%",
    objectFit: "contain",
    height: hp(20),
    borderRadius: 10,
  },
  uploadImage: {
    paddingVertical: hp(2),
    backgroundColor: "#f1f5f9",
    borderColor: "#f1f5f9",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 10,
    height: hp(20),
  },

  uploadBtn: {
    marginVertical: hp(2),
    backgroundColor: "#facc15",
    padding: wp(5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
