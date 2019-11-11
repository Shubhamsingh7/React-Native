import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Balance(props) {
  return (
    <React.Fragment>
      <View>
        <Text style={styles.balanceText}>Balance</Text>
        <Text style={styles.balanceValueText}>{props.balance} VND</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  balanceText: {
    color: '#c3978a',
    fontSize: 15,
  },
  balanceValueText: {
    color: '#00886f',
    fontSize: 20,
    fontFamily: 'CircularStd-Medium',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
