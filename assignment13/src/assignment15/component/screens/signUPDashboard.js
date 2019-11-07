import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class SignUpDashboard extends Component {
  //   componentDidMount() {
  //     try {
  //         //     const value = AsyncStorage.multiGet(['email'], (err, result) => { this.setState({
  //         //   name: results[0][1],
  //         });})

  //       };

  //       if (value) {
  //         this.setState({
  //           user: value,
  //         });
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   }
  constructor() {
    super();
    this.state = {
      email: '',
    };
    //     console.warn(this.props);
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />

        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              fontStyle: 'italic',
              color: '#1db39f',

              textAlign: 'center',
            }}>
            Congratulation ,you have successfully Signed Up
          </Text>
          <Text>{this.props.navigation.getParam('email')}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={{fontSize: 20}}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //     flex: 1,
    //     height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30,
  },

  Input: {
    width: '90%',
    height: 40,
    margin: 10,
    marginTop: 25,
    padding: 5,
    paddingLeft: 15,
    fontSize: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
  },
  button: {
    width: '60%',
    backgroundColor: '#3385e8',
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  keyboard: {
    //     padding: ,
    flex: 1,
  },
});
