import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Assignment02 extends React.Component {
  static navigationOptions = {
    title: 'Assignment02',
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
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          flexDirection: 'column',
        }}>
        <View style={{backgroundColor: 'blue', flex: 1}} />

        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flex: 0.6,
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{flex: 0.6, backgroundColor: 'pink'}}>
              <Text>{this.name}</Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: 'red', flex: 1}}></View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Assignment08')}>
          <Text
            style={{
              margin: 20,
              color: '#fff',
              fontSize: 20,
              alignSelf: 'center',
            }}>
            go to next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
