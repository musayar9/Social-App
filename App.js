import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import RootNavigation from "./navigation/RootNavigation";
import app from "./firebaseConfig";
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
