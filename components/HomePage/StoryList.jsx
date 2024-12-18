import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StoryList = ({name, avatar}) => {
  return (
   <View style={{ paddingHorizontal: 4, alignItems: "center" }}>
            <Image
              source={{ uri: avatar }}
              alt={name}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: "#facc15",
              }}
            />
            <Text>{name}</Text>
          </View>
  )
}

export default StoryList

const styles = StyleSheet.create({})