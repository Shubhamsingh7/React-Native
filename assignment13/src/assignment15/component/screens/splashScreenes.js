import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashScreens extends Component {
  componentDidMount() {
    const value = AsyncStorage.getItem('email');
    // const value1 = AsyncStorage.getItem('user');
    console.warn(value);
    setTimeout(() => {
      // if (!value1) {
      //   this.props.navigation.navigate('SignUp');
      if (!value) this.props.navigation.navigate('LoginScreen');
      else {
        this.props.navigation.navigate('LoginDashBoard');
      }
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>This is splash SplashScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});
