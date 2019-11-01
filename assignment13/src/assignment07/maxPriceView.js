import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

MaxPriceView = function () {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Roads less traveled
        </Text>
        <Text style={styles.totalPrizeText}> 1 day left</Text>
      </View>
      <View>
        <Text style={styles.totalPrizeText}>Total Prize </Text>
        <Text style={styles.prize}>$ 220</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopStartRadius: 15,
    justifyContent: 'space-around',
  },
  prize: {
    fontSize: 25,
    color: 'orange',
  },
  totalPrizeText: {
    opacity: 0.5,
  },
});

export default MaxPriceView;
