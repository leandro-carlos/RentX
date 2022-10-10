import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

import {ArrowLeft, ArrowRight} from 'phosphor-react-native';

import {colors, fonts} from '../utils/theme';

import Vector from '../utils/assets/Vector';
import {ptBr} from '../components/LocaleConfig';
import {generateInterval} from '../functions/generateInterval';
export default function Scheduling({navigation}) {
  const [lastSelectedDate, setLastSelectedDate] = useState({});
  const [markedDates, setMarkedDates] = useState({});

  LocaleConfig.locales['pt-br'] = ptBr;
  LocaleConfig.defaultLocale = 'pt-br';

  function handleChangeDate(item) {
    let start = !lastSelectedDate.timestamp ? item : lastSelectedDate;
    let end = item;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    console.log(interval);

    // setMarkedDates(interval);

    // const firstDate = Object.keys(interval)[0];
    // const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    // setRentalPeriod({
    //   startFormatted: format(
    //     getPlatformDate(new Date(firstDate)),
    //     'dd/MM/yyyy',
    //   ),
    //   endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    // });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.startDate}>
          Escolha uma {`\n`}data de início e {`\n`}fim do aluguel{' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 24,
            marginTop: 32,
          }}>
          <View>
            <Text style={{color: 'white'}}>DE</Text>
            <Text style={{color: 'white'}}>18/06/2022</Text>
          </View>

          <Vector />

          <View>
            <Text style={{color: 'white'}}>ATÉ</Text>
            <Text style={{color: 'white'}}>18/06/2022</Text>
          </View>
        </View>
      </View>
      <Calendar
        firstDay={1}
        onDayPress={item => handleChangeDate(item)}
        minDate={new Date()}
        renderArrow={direction =>
          direction == 'left' ? (
            <ArrowLeft size={32} color={colors.text} />
          ) : (
            <ArrowRight size={32} color={colors.text} />
          )
        }
        markingType={'period'}
        // onPress={() => handleChangeDate()}
        // markedDates={}
        headerStyle={{
          backgroundColor: colors.background_secondary,
          borderBottomColor: colors.text,
          borderBottomWidth: 0.5,
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          textDayFontFamily: fonts.primary_400,
          textDayHeaderFontFamily: fonts.primary_500,
          textDayHeaderFontSize: 10,

          textMonthFontSize: 20,
          monthTextColor: colors.tittle,
          textMonthFontFamily: fonts.secondary_600,

          arrowStyle: {marginHorizontal: -15},
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('SchedulingDetails')}
        style={styles.btnConfirmar}
        activeOpacity={0.65}>
        <Text style={styles.txtConfirmar}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 325,
    backgroundColor: colors.header,
  },
  startDate: {
    fontSize: 30,
    fontFamily: fonts.secondary_500,
    marginLeft: 25,
    marginRight: 138,
    marginTop: 121,
    color: 'white',
  },
  btnConfirmar: {
    height: 56,
    backgroundColor: colors.main,
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 40,
    borderRadius: 10,
  },
  txtConfirmar: {
    color: colors.background_secondary,
    fontFamily: fonts.primary_500,
    fontSize: 15,
  },
});
