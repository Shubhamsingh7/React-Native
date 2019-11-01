import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const FirstPrize = function() {
  return (
    <View style={styles.prizeViewStyle}>
      <View>
        <Image source={require('./assets/first.png')} />
      </View>
      <View>
        <Text style={styles.prizeText}>1st Prize</Text>
        <Text style={styles.prizeValueText}>$ 125</Text>
      </View>
    </View>
  );
};

export const SecondPrize = () => {
  return (
    <View style={styles.prizeViewStyle}>
      <View>
        <Image source={require('./assets/second.png')} />
      </View>
      <View>
        <Text style={styles.prizeText}>2st Prize</Text>
        <Text style={styles.prizeValueText}>$ 60</Text>
      </View>
    </View>
  );
};

export const ThirdPrize = function() {
  return (
    <View style={styles.prizeViewStyle}>
      <View>
        <Image source={require('./assets/third.png')} />
      </View>
      <View>
        <Text style={styles.prizeText}>3rd Prize</Text>
        <Text style={styles.prizeValueText}>$ 35</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  prizeViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#f0f0d2',
    padding: 5,
  },
  prizeText: {
    opacity: 0.5,
  },
  prizeValueText: {
    fontSize: 20,
    color: 'green',
  },
});
