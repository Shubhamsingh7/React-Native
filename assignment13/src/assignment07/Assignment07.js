import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import ImageView from './childComponents';
import MaxPriceView from './maxPriceView';
import {Description, Rules} from './description';
import {FirstPrize, SecondPrize, ThirdPrize} from './prizeView';

export default class Assignment07 extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaViewStyle}>
        {/* <ImageView imageUrl="https://images.pexels.com/photos/1984121/pexels-photo-1984121.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
        {/* <MaxPriceView /> */}
        <View style={styles.prizeViewCards}>
          {/* <FirstPrize /> */}
          {/* <SecondPrize /> */}
          {/* <ThirdPrize /> */}
        </View>
        {/* <Description /> */}
        {/* <Rules /> */}

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
              backgroundColor: 'powderblue',
              width: 100,
              height: 50,
              shadowColor: 'black',
              shadowRadius: 10,
              shadowOpacity: 0.5,
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: 'bold'}}>View Gallery</Text>
          </View>
          // eslint-disable-next-line react-native/no-inline-styles
          <TouchableOpacity style={{paddingLeft: 200, marginTop: 10}}>
            <Image source={require('./assets/plus.png')} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  prizeViewCards: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
