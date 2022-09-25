import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { ArrowLeft, Calendar, CaretRight } from 'phosphor-react-native'

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

export default function SchedulingDetails() {
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
                    source={Lamborguini}
                    style={styles.image}
                    resizeMode='contain'
                />
                <View style={styles.content}>

                    <View style={styles.containerDetails}>
                        <View >
                            <Text style={styles.nameModel}>Lamborghini</Text>
                            <Text style={styles.model}>Huracan</Text>
                        </View>

                        <View>
                            <Text style={styles.rent}>AO DIA</Text>
                            <Text style={styles.price}>R$ 580</Text>
                        </View>
                    </View>

                    <View style={styles.acessories}>

                        <Accessory name={'380km/h'} Icon={Speed} />
                        <Accessory name={'3.2s'} Icon={Up} />
                        <Accessory name={'800 HP'} Icon={Forca} />
                        <Accessory name={'Gasolina'} Icon={Gasolina} />
                        <Accessory name={'32 x 32'} Icon={cambio} />
                        <Accessory name={'2 Pessoas'} Icon={Pessoas} />
                    </View>

                </View>

                <View style={styles.about}>

                    <View style={{ flexDirection: 'row', marginHorizontal: 24, marginTop: 40, alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, paddingBottom: 21 }}>
                        <View style={{ backgroundColor: 'red', width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}>
                            <Calendar size={30} weight="thin" color='white' />
                        </View>

                        <View>
                            <Text >DE</Text>
                            <Text >18/06/2022</Text>
                        </View>

                        <CaretRight size={20} weight="thin" />

                        <View>
                            <Text >ATÉ</Text>
                            <Text >18/06/2022</Text>
                        </View>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 16,
                        marginHorizontal: 24
                    }}>
                        <View>
                            <Text
                                style={{
                                    fontFamily: fonts.secondary_500,
                                    color: colors.text_detail,
                                    fontSize: 10
                                }} >TOTAL</Text>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: fonts.primary_500,
                                color: 'black'
                            }}>R$ 580 X 3 diárias</Text>
                        </View>

                        <Text style={{
                            fontFamily: fonts.secondary_500,
                            color: colors.sucess,
                            fontSize: 24
                        }}>R$ 2900</Text>
                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity
                style={styles.buttonRent}
                activeOpacity={0.5} >
                <Text style={styles.textRent}>Alugar Agora</Text>
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
        height: 133,
        marginHorizontal: 48,
        marginTop: 40,
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

    },
    buttonRent: {
        marginHorizontal: 24,
        marginTop: 20,
        marginBottom: 31,
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.sucess,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRent: {
        color: 'white',
        fontSize: colors.primary_500,
        fontSize: 15
    }
})