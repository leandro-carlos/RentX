import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { colors, fonts } from './src/utils/theme'

// Imports

import Header from './src/components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle='light-content'
        translucent
      />

      <Header />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_primary,
    flex: 1
  }
})