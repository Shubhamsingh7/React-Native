import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

import Form from './form.js';
import Card from './card.js';

export default class Assignment03 extends Component {
  static navigationOptions = {
    title: 'Assignment03',
    headerStyle: {
      backgroundColor: '#2fb1bd',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Form />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    // flex:1,
    justifyContent: 'center',
  },
});
