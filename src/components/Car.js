import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Gasolina from '../utils/assets/Gasolina.svg'
import Energia from '../utils/assets/Energia.svg'


import { colors, fonts } from '../utils/theme'

export default function Car() {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.brand}>Audi</Text>
                <Text style={styles.name}>RS 5 Coupé</Text>

                <View style={styles.about}>
                    <View style={styles.rent}>
                        <Text style={styles.aluguel}>AO DIA</Text>
                        <Text style={styles.price}>R$ 120</Text>
                    </View>
                    <Energia />

                </View>
            </View>


            <Image
                style={{ width: 167, height: 85 }}
                source={require('../utils/assets/audi.png')}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 126,
        backgroundColor: colors.background_secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 16,
        paddingHorizontal: 24,
        paddingVertical: 17,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 

        elevation: 5,

    },
    details: {
    },
    brand: {
        fontSize: 14,
        fontFamily: fonts.secondary_500,
        color: colors.details,
        textTransform: 'uppercase'
    },
    name: {
        fontSize: 15,
        fontFamily: fonts.secondary_500,
        color: colors.tittle
    },

    about: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16
    },

    rent: {
        marginRight: 24
    },

    aluguel: {
        fontSize: 15,
        fontFamily: fonts.secondary_500,
        color: colors.text
    },
    price: {
        color: colors.main,
        fontSize: 15,
        fontFamily: fonts.secondary_500
    },
    type: {

    }

})