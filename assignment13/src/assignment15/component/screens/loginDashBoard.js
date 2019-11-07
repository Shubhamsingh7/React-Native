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
import {SafeAreaView} from 'react-navigation';
import {ScrollView} from 'react-native-gesture-handler';
import SignUp from './signUp';

export default class LoginDashBoard extends Component {
  remove = () => {
    try {
      AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    this.props.navigation.navigate('SignUp');
  };

  componentDidMount() {
    AsyncStorage.multiGet(
      ['name', 'email', 'contact', 'course', 'motherName', 'fatherName'],
      (err, results) => {
        this.setState({
          name: results[0][1],
        });
        this.setState({
          email: results[1][1],
        });
        this.setState({
          contact: results[2][1],
        });
        this.setState({
          course: results[3][1],
        });
        this.setState({
          motherName: results[4][1],
        });
        this.setState({
          fatherName: results[5][1],
        });
      },
    );
  }
  constructor() {
    super();
    this.state = {
      name: 'ghjhjgkghjkghjkghjk',
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
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <ScrollView>
              <Text style={styles.text}>{this.state.name}</Text>
              <Text style={styles.text}>{this.state.email}</Text>
              <Text style={styles.text}>{this.state.contact}</Text>
              <Text style={styles.text}>{this.state.course}</Text>
              <Text style={styles.text}>{this.state.motherName}</Text>
              <Text style={styles.text}>{this.state.fatherName}</Text>
            </ScrollView>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{fontSize: 20}}>clean data </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    flex: 1,
  },
  text: {
    fontSize: 30,
    backgroundColor: '#1ea3ba',
    padding: 50,
    margin: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    borderRadius: 40,
    color: '#fff',
  },
});
