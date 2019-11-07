import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Assignment01 from './assignment01/Assignment01';
import Assignment02 from './assignment02/Assignment02';
import Assignment03 from './assignment03/Assignment';
import Assignment04 from './assignment04/Assignment04';
import Assignment05 from './assignment05/Assignment05';
import Assignment06 from './assignment06/Assignment06';
import Assignment07 from './assignment07/Assignment07';
import Assignment08 from './assignment08/Assignment08';
import Assignment09 from './assignment09/Assignment09';
import Assignment10 from './assignment10/Assignment10';
import Assignment11 from './assignment11/Assignment11';
import Assignment12 from './assignment12/Assignment12';
import Assignment14 from './assignment14/Assignment14';
import LoginScreen from './assignment15/component/screens/login';
import SignUp from './assignment15/component/screens/signUp';
import SignUpDashboard from './assignment15/component/screens/signUPDashboard';
import SplashScreens from './assignment15/component/screens/splashScreenes';
import LoginDashBoard from './assignment15/component/screens/loginDashBoard';

class MainView extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerBackTitle: 'pop',
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
      <>
        <StatusBar />
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                backgroundColor: '#dce8e7',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment01')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment01
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment02')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment02
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment03')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment03
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment04')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment04
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment05')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment05
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment06')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment06
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment07')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment07
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment08')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment08
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment09')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment09
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment10')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment10
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment11')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment11
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment12')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment12
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Assignment14')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    assignment14
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderColor: '#000',
                  borderRadius: 30,
                  margin: 20,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('SplashScreens')
                  }>
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                    }}>
                    Assignment 15 Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: MainView,
    Assignment01: Assignment01,
    Assignment02: Assignment02,
    Assignment03: Assignment03,
    Assignment04: Assignment04,
    Assignment05: Assignment05,
    Assignment06: Assignment06,
    Assignment07: Assignment07,
    Assignment08: Assignment08,
    Assignment09: Assignment09,
    Assignment10: Assignment10,
    Assignment11: Assignment11,
    Assignment12: Assignment12,
    Assignment14: Assignment14,
    SplashScreens: SplashScreens,
    LoginScreen: LoginScreen,
    SignUp: SignUp,
    SignUpDashboard: SignUpDashboard,
    LoginDashBoard: LoginDashBoard,
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);
