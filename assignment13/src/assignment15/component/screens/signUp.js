import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export default class SignUp extends Component {
  componentDidMount() {
    AsyncStorage.setItem('email', this.state.email);
  }
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />

        <KeyboardAvoidingView
          keyboardVerticalOffset={10}
          style={styles.keyboard}
          behavior="height"
          enabled>
          <View style={styles.container}>
            <TextInput
              style={styles.Input}
              returnKeyType={'done'}
              placeholder={'Enter email'}
              keyboardType={'email-address'}
              onChangeText={email =>
                this.setState({
                  email: email,
                })
              }
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('SignUpDashboard')}>
              <Text style={{fontSize: 20}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    width: '40%',
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
