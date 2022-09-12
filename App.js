import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, TextInput, Text, TouchableOpacity } from 'react-native'
import { colors } from './src/utils/theme'

// Component

import Header from './src/components/Header'
import Car from './src/components/Car'

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle='light-content'
        translucent
      />

      <Header />
      <Car />

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.hea,
    flex: 1
  },
  btnLogin: {
    backgroundColor: colors.shape_dark,
    width: '90%',
    margin: 15,
    color: 'white'
  },
  txtEmail: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: colors.text,
  },
  buttonFacebook: {
    borderWidth: 1,
    height: 40,
    marginHorizontal: 40,
    backgroundColor: '#229dea',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  }
})