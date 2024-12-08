import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import Home from '../screen/Home'
import Login from '../screen/Login'
import Register from '../screen/Register'
import HomePage from '../screen/HomePage'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()
const RootNavigation = () => {

const {isAuth} = useSelector((state)=> state.user)


  return (
    <NavigationContainer>
      {isAuth ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home-page" component={HomePage} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default RootNavigation

const styles = StyleSheet.create({})