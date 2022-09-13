import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/theme'

export default function Accessory({ name, Icon }) {
    return (
        <View style={styles.container}>
            <Icon />
            <Text style={styles.textName}>{name}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        width: 109,
        height: 92,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 5,
        backgroundColor: colors.background_primary,
        margin: 5
    },
    textName: {
        fontSize: 13,
        color: colors.text,
        paddingTop: 14,
    }
})