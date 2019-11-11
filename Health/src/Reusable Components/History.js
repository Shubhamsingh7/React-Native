import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {underline} from 'ansi-colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function History() {
  return (
    <React.Fragment>
      <View style={styles.firstLine}>
        <Text style={styles.historyText}>History</Text>
        <TouchableOpacity>
          <Text style={{textDecorationLine: underline}}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondLine}>
        <View>
          <Text>Add relative</Text>
          <Text style={styles.date}>13/06/2019</Text>
        </View>

        <Text style={styles.dollerText}>4.000.000 VND</Text>
      </View>
      <View style={styles.thirdLine}>
        <View>
          <Text>Add relative</Text>
          <Text style={styles.date}>24/06/2019</Text>
        </View>
        <Text style={styles.dollerText}>4.000.000 VND</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    marginTop: wp('2%'),
  },
  secondLine: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    marginTop: wp('2%'),
  },
  thirdLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    marginTop: wp('2%'),
    marginBottom: 40,
  },
  date: {
    fontSize: wp('3%'),
    opacity: 0.6,
  },
  historyText: {
    color: '#c39784',
    fontSize: wp('5%'),
  },
  dollerText: {
    color: '#bb040f',
    fontSize: wp('4%'),
  },
});
