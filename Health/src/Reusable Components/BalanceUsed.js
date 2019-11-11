import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function BalanceUsed(props) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.balanceText}>{props.balanceText}</Text>
        <Text style={styles.balanceValueText}>{props.balanceUsed} VND</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  balanceText: {
    color: '#c3978a',
    fontSize: wp('5%'),
  },
  balanceValueText: {
    color: '#00886f',
    fontSize: wp('5.5%'),
    fontFamily: 'CircularStd-Medium',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
