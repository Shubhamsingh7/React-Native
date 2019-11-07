import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import {StyleSheet, View, Text} from 'react-native';

export default class Google extends React.Component {
  constructor() {
    super();

    GoogleSignin.configure();
  }

  signIn = async () => {
    try {
      console.warn('DDDD');
      await GoogleSignin.hasPlayServices();
      GoogleSignin.configure();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
      this.props.navigation.navigate('LoginDash');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Login Page</Text>

          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
            //     disabled={this.state.isSigninInProgress}
            style={{height: 48, width: 250}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 0.5,
    marginTop: 100,
    alignItems: 'center',
    backgroundColor: '#e6f2f1',
    padding: 30,
    margin: 20,
    borderRadius: 20,
  },

  Input: {
    width: '90%',
    height: 40,
    margin: 10,
    marginTop: 25,
    padding: 5,
    paddingLeft: 15,
    fontSize: 20,
    borderColor: '#e6f2f1',
    borderWidth: 1,
    borderRadius: 20,
  },
  button: {
    width: '40%',
    backgroundColor: '#3385e8',
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontSize: 40,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    //     color: '#fff',
    marginBottom: 30,
  },
  keyboard: {
    //     padding: ,
    flex: 1,
  },
});
