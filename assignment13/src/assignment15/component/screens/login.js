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

export default class LoginScreen extends Component {
  multiSet = async () => {
    const firstPair = ['name', this.state.name];
    const secondPair = ['email', this.state.email];
    const thirdPair = ['contact', this.state.contact];
    const fourthPair = ['course', this.state.course];
    const fifthPair = ['motherName', this.state.motherName];
    const sixthPair = ['fatherName', this.state.fatherName];

    try {
      await AsyncStorage.multiSet([
        firstPair,
        secondPair,
        thirdPair,
        fourthPair,
        fifthPair,
        sixthPair,
      ]);
    } catch (e) {
      //save error
    }
    this.props.navigation.navigate('LoginDashBoard');
    console.log('Done.');
  };

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      contact: '',
      course: '',
      motherName: '',
      fatherName: '',
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
              returnKeyType={'next'}
              placeholder={'Name'}
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              onChangeText={value =>
                this.setState({
                  name: value,
                })
              }
            />
            <TextInput
              style={styles.Input}
              keyboardType={'email-address'}
              placeholder={'Email'}
              returnKeyType={'next'}
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => {
                this.ThirdTextInput.focus();
              }}
              onChangeText={value =>
                this.setState({
                  email: value,
                })
              }
            />
            <TextInput
              style={styles.Input}
              returnKeyType={'next'}
              keyboardType={'number-pad'}
              placeholder={'Contact'}
              ref={input => {
                this.ThirdTextInput = input;
              }}
              onSubmitEditing={() => {
                this.fourthTextInput.focus();
              }}
              onChangeText={value =>
                this.setState({
                  contact: value,
                })
              }
            />
            <TextInput
              style={styles.Input}
              returnKeyType={'next'}
              placeholder={'Course'}
              ref={input => {
                this.fourthTextInput = input;
              }}
              onSubmitEditing={() => {
                this.fifthTextInput.focus();
              }}
              onChangeText={value =>
                this.setState({
                  course: value,
                })
              }
            />
            <TextInput
              style={styles.Input}
              returnKeyType={'next'}
              ref={input => {
                this.fifthTextInput = input;
              }}
              onSubmitEditing={() => {
                this.sixthTextInput.focus();
              }}
              onChangeText={value =>
                this.setState({
                  motherName: value,
                })
              }
              placeholder={'Mother Name'}></TextInput>
            <TextInput
              style={styles.Input}
              returnKeyType={'done'}
              ref={input => {
                this.sixthTextInput = input;
              }}
              onChangeText={value =>
                this.setState({
                  fatherName: value,
                })
              }
              placeholder={'Father Name'}></TextInput>
            <TouchableOpacity style={styles.button} onPress={this.multiSet}>
              <Text style={{fontSize: 20}}>Login</Text>
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
