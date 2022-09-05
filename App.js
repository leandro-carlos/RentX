import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <Text>olá</Text>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1
  }
})