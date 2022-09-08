import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, TextInput, Text } from 'react-native'
import { colors, fonts } from './src/utils/theme'

// Imports

import Header from './src/components/Header'

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle='light-content'
        translucent
      />

      <Header />

      <TextInput onChangeText={setEmail} style={styles.btnLogin}></TextInput>
      <TextInput onChangeText={setPassword} style={styles.btnLogin}></TextInput>

      <Text style={styles.txtEmail}>
        Seu email é {email}
      </Text>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_primary,
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
  }
})