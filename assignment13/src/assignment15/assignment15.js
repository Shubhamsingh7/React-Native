import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  Picker,
} from 'react-native';
import SplashScreens from './component/screens/splashScreenes';
//import Assignment10 from './../assignment10/Assignment10';

class Assignment15 extends React.Component {
  componentDidMount() {
    console.warn('dbhdhjdhdh');
    setTimeout(() => {
      console.warn('dbhdhjdhdh');
      this.props.navigation.navigate('Assignment10');
    }, 2000);
  }

  render() {
    return <></>;
  }
}
