import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

export default function Scheduling() {
    return (
        <View style={style.container}>
            <Header />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1
    }
})