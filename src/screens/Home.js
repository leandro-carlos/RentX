import React, { useEffect, useState } from 'react'
import { View, StyleSheet, StatusBar, TextInput, Text, FlatList, TouchableOpacity, Pressable } from 'react-native'
import { colors } from '../utils/theme'

// Component

import Header from '../components/Header'
import Car from '../components/Car'

import api from '../services/api'

export default function Home({ navigation }) {


  const [list, setList] = useState([])

  useEffect(() => {

    async function getLista() {
      const response = await api.get('/cars')
      setList(response.data)
      console.log(response.data)
    }
    getLista()
  }
    , [])

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle='light-content'
        translucent
      />
      <Header />
      <FlatList
        data={list}
        extraData={list}
        keyExtractor={item => item.id}
        renderItem={
          ((item, index) =>
            <TouchableOpacity activeOpacity={0.75} onPress={() => navigation.navigate('Details', { item: item, index: index })}>
              <Car item={item} />
            </TouchableOpacity>
          )}
      />

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