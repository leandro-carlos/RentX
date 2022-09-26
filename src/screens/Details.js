import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

// Imports 

import { colors, fonts } from '../utils/theme'
import Lamborguini from '../utils/assets/Lambo.png'
import Accessory from '../components/Accessory'

import Speed from '../utils/assets/Speed.svg'
import Pessoas from '../utils/assets/Pessoas.svg'
import Up from '../utils/assets/Up.svg'
import Gasolina from '../utils/assets/Gasolina.svg'
import Forca from '../utils/assets/Forca.svg'
import cambio from '../utils/assets/cambio.svg'

export default function Details({ route }) {

    const marca = route.params?.item.item.brand;
    const modelo = route.params?.item.item.name
    const price = route.params?.item.item.rent.price
    const image = route.params?.item.item.photos[0]
    const about = route.params?.item.item.about
    const index = route.params?.item.index


    const velocidade = route.params?.item.item.accessories[index].name

    console.log(velocidade);
    


    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.header}>
                    <ArrowLeft size={24} color='black' />

                    <View style={styles.containerElipse}>
                        <View active={true} style={[styles.elipse, { backgroundColor: 'black', borderRadius: 5 }]} />
                        <View active={true} style={styles.elipse} />
                        <View active={true} style={styles.elipse} />
                        <View active={true} style={styles.elipse} />
                    </View>
                </View>

                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    resizeMode='contain'
                />
                <View style={styles.content}>

                    <View style={styles.containerDetails}>
                        <View >
                            <Text style={styles.nameModel}>{marca}</Text>
                            <Text style={styles.model}>{modelo}</Text>
                        </View>

                        <View>
                            <Text style={styles.rent}>AO DIA</Text>
                            <Text style={styles.price}>R$ {price}</Text>
                        </View>
                    </View>

                    <View style={styles.acessories}>

                        <Accessory name={'velocity'} Icon={Speed} />
                        <Accessory name={'3.2s'} Icon={Up} />
                        <Accessory name={'800 HP'} Icon={Forca} />
                        <Accessory name={'Gasolina'} Icon={Gasolina} />
                        <Accessory name={'32 x 32'} Icon={cambio} />
                        <Accessory name={'2 Pessoas'} Icon={Pessoas} />
                    </View>

                    <Text style={styles.about}>
                        {about}
                    </Text>

                </View>

            </ScrollView>

            <TouchableOpacity
                style={styles.buttonRent}
                activeOpacity={0.5}
            >
                <Text style={styles.textRent}>Escolher período do aluguel</Text>
            </TouchableOpacity>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        marginTop: 20,
        marginHorizontal: 28,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerElipse: {
        flexDirection: 'row',
        paddingRight: 24,
    },
    elipse: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        backgroundColor: colors.text_detail,
    },
    image: {
        width: 280,
        height: 190,
        marginHorizontal: 48,
        marginTop: 40,
        borderRadius: 10
    },
    content: {
        marginHorizontal: 25,
    },
    containerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
    },
    nameModel: {
        color: colors.Details,
        fontSize: 10,
        fontFamily: fonts.secondary_500
    },
    model: {
        color: colors.tittle,
        fontSize: 25,
        fontFamily: fonts.secondary_500
    },
    rent: {
        color: colors.Details,
        fontSize: 10,
        fontFamily: fonts.secondary_500
    },
    price: {
        color: colors.main,
        fontSize: 25,
        fontFamily: fonts.secondary_500
    },
    acessories: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: -25,  // Pra anular o style de content e caber os 6 
        marginTop: 16
    },
    about: {
        fontFamily: fonts.secondary_400,
        fontSize: 15,
        textAlign: 'justify',
        paddingHorizontal: 10,
        marginTop: 24
    },
    buttonRent: {
        marginHorizontal: 24,
        marginTop: 20,
        marginBottom: 31,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.main,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRent: {
        color: 'white',
        fontSize: colors.primary_500,
        fontSize: 15
    }
})