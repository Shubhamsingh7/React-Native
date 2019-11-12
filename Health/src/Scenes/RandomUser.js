import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import RandomUserStore from '../Store/RandomUserStore';

import {observer} from 'mobx-react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

@observer
class RandomUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  callApi() {
    this.setState(() => {
      return {num: this.state.num + 1};
    });
    return fetch('https://randomuser.me/api/?results=10&page=' + this.state.num)
      .then(response => response.json())
      .then(responseJson => {
        RandomUserStore.list = RandomUserStore.list.concat(
          responseJson.results,
        ); //console.warn(Apidata.list);
      });
  }
  componentDidMount() {
    this.callApi();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{marginTop: wp('4%')}}>
          <FlatList
            style={{marginBottom: wp('5%'), marginTop: wp('8%')}}
            data={RandomUserStore.list}
            keyExtractor={(item, index) => Math.random().toString()}
            renderItem={({item, index}) => (
              <View
                style={{
                  marginBottom: wp('5%'),
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  // flex: 1,
                  width: wp('90%'),
                  shadowColor: '#e8c',
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,
                  elevation: 24,
                  alignSelf: 'center',
                  height: wp('30%'),
                  borderRadius: wp('5%'),
                  backgroundColor: '#206185',
                }}>
                <Image
                  style={{
                    height: wp('20%'),
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    width: wp('20%'),
                    borderRadius: wp('10%'),
                    margin: wp('3%'),
                  }}
                  source={{uri: item.picture.thumbnail}}
                />
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: wp('6%'),
                      textAlign: 'right',
                      textAlignVertical: 'center',
                    }}>
                     {item.name.first} {item.name.last}
                  </Text>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    margin: wp('5%'),
                    marginTop: wp('20%'),
                  }}>
                  <Text style={{textAlign: 'left', color: '#fff'}}>
                     {item.location.country}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      RandomUserStore.Uniqueid = item.id;

                      RandomUserStore.double();
                    }}>
                    <Image
                      style={{height: wp('6%'), width: wp('6%')}}
                      source={require('../Assets/Images/delete-black-48dp/1x/baseline_delete_black_48dp.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            onEndReached={() => {
              if (true) {
                this.callApi();
              } else {
                return false;
              }
            }}
            onEndReachedThreshold={0.01}
          />
        </View>
      </View>
    );
  }
}

export default RandomUser;
