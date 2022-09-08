import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { colors } from './src/utils/assets/theme'

export default function App() {
  return (
    <View style={style.container}>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_primary
  }
})