import React, {Component} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import HomeScreen from './Scenes/HomeScreen';
import ToDo from './Scenes/Todo';
import RandomUser from './Scenes/RandomUser';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {/* <HomeScreen /> */}
        {/* <ToDo /> */}
        <RandomUser />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
