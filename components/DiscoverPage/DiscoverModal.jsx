import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { hp, wp } from "../../helper/common";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PanGestureHandler } from "react-native-gesture-handler";

const DiscoverModal = ({ setModalVisible, selectedItem, modalVisible }) => {
const [translateY, setTranslateY] = useState(0);

const handleGesture = (event) => {
  const { translationY } = event.nativeEvent;
  if (translationY > 100) {
    setModalVisible(false);
  } else {
    setTranslateY(translationY);
  }
};
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { transform: [{ translateY }] }]}>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <FontAwesome6 name="xmark" size={24} color="#e71f1f" />
            </Pressable>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <View style={styles.modalHeaderLeft}>
                  <Image
                    source={{ uri: selectedItem?.profileImage }}
                    alt="profileImage"
                    style={styles.profileImage}
                  />
                  <Text style={styles.modalText}>{selectedItem?.userName}</Text>
                </View>
                <View style={styles.modalHeaderRight}>
                  <Pressable style={styles.followBtn}>
                    <Text style={styles.followBtnText}>Takip Et</Text>
                  </Pressable>
                  <Entypo
                    name="dots-three-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
              <View>
                <Image
                  style={styles.modalPostImage}
                  source={{ uri: selectedItem?.postImage }}
                  alt="postImage"
                />
              </View>
              <View style={styles.modalIcons}>
                <View style={styles.modalIconsLeft}>
                  <View style={styles.modalIconsContent}>
                    <Entypo name="heart-outlined" size={26} color="black" />
                    <Text style={styles.modalIconsText}>
                      {selectedItem?.like}
                    </Text>
                  </View>
                  <View style={styles.modalIconsContent}>
                    <FontAwesome name="comment-o" size={26} color="black" />
                    <Text style={styles.modalIconsText}>
                      {selectedItem?.comments}
                    </Text>
                  </View>
                  <View style={styles.modalIconsContent}>
                    <SimpleLineIcons
                      name="paper-plane"
                      size={26}
                      color="black"
                    />
                    <Text style={styles.modalIconsText}>
                      {selectedItem?.share}
                    </Text>
                  </View>
                </View>
                <View style={styles.modalIconsRight}>
                  <FontAwesome name="bookmark-o" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </Modal>
  );
};

export default DiscoverModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  modalView: {
    marginTop: hp(10),
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    width: "100%",
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: hp(2),
    alignSelf: "flex-end",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    color: "#f34821",
    padding: hp(1),
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: hp(1.8),
    fontWeight: "600",
  },
  modalContent: { paddingVertical: hp(2) },

  profileImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: hp(5),
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // minWidth: 350,

    paddingHorizontal: wp(3.8),
    paddingBottom: hp(1.2),
  },
  modalHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  modalHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  followBtn: {
    padding: hp(1),
    borderRadius: 8,
    backgroundColor: "#111111ae",
  },
  followBtnText: {
    color: "#fff",
  },
  modalPostImage: {
    width: "100%",
    height: hp(30),
    objectFit: "cover",
  },
  modalIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(4),
  },
  modalIconsLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  modalIconsContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  modalIconsText: {
    fontSize: hp(1.8),
    fontWeight: "600",
  },
});
