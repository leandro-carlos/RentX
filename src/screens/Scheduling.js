import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'

import { ArrowLeft, ArrowRight } from 'phosphor-react-native'

import Header from '../components/Header'
import { colors, fonts } from '../utils/theme'

export default function Scheduling() {

    LocaleConfig.locales['pt-br'] = {
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['DOM', 'SEG.', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
        today: "Hoje"
    };

    LocaleConfig.defaultLocale = 'pt-br';

    return (
        <View style={style.container}>
            <Header />
            <Calendar
                firstDay={1}
                minDate={new Date()}
                renderArrow={(direction) =>
                    direction == 'left'
                        ? <ArrowLeft size={32} color={colors.text} />
                        : <ArrowRight size={32} color={colors.text} />}
                headerStyle={{
                    backgroundColor: colors.background_secondary,
                    borderBottomColor: colors.text,
                    borderBottomWidth: 0.5,
                    paddingBottom: 10,
                    marginBottom: 10
                }}
                theme={{
                    textDayFontFamily: fonts.primary_400,
                    textDayHeaderFontFamily: fonts.primary_500,
                    textDayHeaderFontSize: 10,

                    textMonthFontSize: 20,
                    monthTextColor: colors.tittle,
                    textMonthFontFamily: fonts.secondary_600,

                    arrowStyle: { marginHorizontal: -15 },

                }}
            />

            <TouchableOpacity>
                <Text>CONFIRMAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
})