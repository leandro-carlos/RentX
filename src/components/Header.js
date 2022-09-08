import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, fonts } from '../utils/theme'

import Logo from '../utils/assets/logotipo.svg'

export default function Header() {
    return (

        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Logo />
                <Text style={styles.text}>Total de 12 carros</Text>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({

    header: {
        backgroundColor: colors.header,
        width: '100%',
        height: 113,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 28
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: colors.text,
        fontFamily: fonts.primary_400,
        fontSize: 16
    }
})