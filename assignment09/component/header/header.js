import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export const HeaderVoteView = function() {
  return (
    <View style={styles.headerVoteViewMainStyle}>
      <View
        style={{
          backgroundColor: '#f2850f',
          borderRadius: 10,
          alignItems: 'center',
          marginRight: 5,
        }}>
        <Image source={require('../../assets/add.png')} />
      </View>
      <Text>7/15 votes</Text>
    </View>
  );
};

export default class Header extends React.PureComponent {
  render() {
    return (
      <View style={styles.headerViewStyle}>
        <Image source={require('../../assets/arrow.png')}></Image>
        <Text style={styles.headerCenterTextStyle}>Hall Of Fame</Text>
        <HeaderVoteView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2850f',
  },
  headerCenterTextStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerVoteViewMainStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 5,
  },
});
