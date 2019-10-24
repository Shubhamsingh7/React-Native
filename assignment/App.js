/* eslint-disable react-native/no-inline-styles */

import {Card} from './card';
import React, {Component} from 'react';
import UserDataArray from './model';
import {
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';

export default class MainClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataArray: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    return fetch('https://randomuser.me/api/?results=100')
      .then(response => response.json())
      .then(responseJson => {
        const a = new UserDataArray(responseJson.results);
        this.setState({
          userDataArray: responseJson.results,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  Data = {};
  render() {
    if (this.state.isLoading) {
      return (
        <SafeAreaView>
        <Text style={styles.headingStyle}>Random User</Text>
        <View style={{paddingTop: 100}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView>
        <Text style={styles.headingStyle}>Random User</Text>
          
          <FlatList
            data={this.state.userDataArray}
            renderItem={({item}) => {
              return <Card list={item} />;
            }}
          />
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontStyle: 'italic',
  },
});
