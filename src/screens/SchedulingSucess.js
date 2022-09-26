import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import Union from '../utils/assets/Union.svg'
import Done from '../utils/assets/Done.svg'

import { colors, fonts } from '../utils/theme'

export default function SchedulingSucess() {
    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                translucent />

            <Union style={{ marginTop: 96 }} />
            <Done style={{ marginTop: 21 }} />

            <Text style={style.carAlugado}>Carro alugado!</Text>

            <Text style={style.textComplet}>
                Agora você só precisa ir {'\n'}
                até a concessionária da RENTX{'\n'}
                pegar o seu automóvel.
            </Text>

            <TouchableOpacity style={style.btnOk} >
                <Text style={{color: 'white', fontFamily: fonts.primary_500, fontSize: 15}}> Ok </Text>
            </TouchableOpacity>


        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.header,
        alignItems: 'center'
    },
    carAlugado: {
        color: colors.background_secondary,
        fontFamily: fonts.secondary_600,
        fontSize: 30,
    },
    textComplet: {
        color: colors.text_detail,
        fontFamily: fonts.secondary_600,
        fontSize: 15,
        lineHeight: 25
    },
    btnOk: {
        width: 80,
        height: 56,
        backgroundColor: colors.tittle,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 50
    },
})