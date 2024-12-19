import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Home from "../screen/Home";
import Login from "../screen/Login";
import Register from "../screen/Register";
import HomePage from "../screen/HomePage";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screen/Profile";
import Create from "../screen/Create";
import { Entypo } from "@expo/vector-icons";
import CustomTabBarButton from "../screen/ui/CustomTabBarButton";
import TabIcon from "../screen/ui/TabIcon";
import Discover from "../screen/Discover";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const RootNavigation = () => {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      {isAuth ? (
        <BottomTabs.Navigator
          // initialRouteName="Home"
          screenOptions={{
            tabBarHideOnKeyboard: false,
            tabBarActiveTintColor: "#111",
            tabBarInactiveTintColor: "#cbd5e1",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          <BottomTabs.Screen
            name="home"
            component={HomePage}
            options={{
              // title: "Home",

              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => (
                <TabIcon
                  icon={"home"}
                  color={color}
                  focused={focused}
                  name={"Home"}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="message"
            component={Discover}
            options={{
              // title: "Home",

              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => (
                <TabIcon
                  icon={"compass"}
                  color={color}
                  focused={focused}
                  name={"Discover"}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="create"
            component={Create}
            options={{
              tabBarButton: (props) => (
                <CustomTabBarButton {...props}>
                  <Ionicons name={"add"} color="white" size={24} />
                </CustomTabBarButton>
              ),
              headerShown: false,
            }}
          />
          <BottomTabs.Screen
            name="video"
            component={Profile}
            options={{
              // title: "Profile",
              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => (
                <TabIcon
                  icon={"videocam"}
                  color={color}
                  focused={focused}
                  name={"Video"}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="profile"
            component={Profile}
            options={{
              // title: "Profile",
              headerShown: false,
              tabBarIcon: ({ color, focused, size }) => (
                <TabIcon
                  icon={"person"}
                  color={color}
                  focused={focused}
                  name={"profile"}
                  size={size}
                />
              ),
            }}
          />
        </BottomTabs.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false}}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: "#ffffff",

    paddingHorizontal: 10, 
    position: "absolute", 
    left: 0, 
    right: 0, 
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 15,
    borderTopWidth: 1,
    borderTopColor: "#ececec",
    zIndex: 10, 
  },
});
