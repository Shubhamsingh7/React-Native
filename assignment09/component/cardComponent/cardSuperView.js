/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class CardSuperView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>January</Text>
          <Text>2 challenge</Text>
        </View>
        <View
          style={{
            backgroundColor: '#ebcdae',
            alignContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20,
            paddingBottom: 60,
            margin: 10,
            borderRadius: 10,
            zIndex: 1,
          }}>
          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>

          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>
          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 25,
            width: '60%',
            alignSelf: 'center',
            //     position: 'absolute',
            marginTop: -40,
            zIndex: 2,
            padding: 15,
            justifyContent: 'space-around',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Jungle Safari</Text>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Image
              source={require('../../assets/third.png')}
              style={{height: 20, width: 20}}></Image>
            <Text style={{opacity: 0.6}}>1st jan 2018- 20 jan 2018 </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>January</Text>
          <Text>2 challenge</Text>
        </View>
        <View
          style={{
            backgroundColor: '#ebcdae',
            alignContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20,
            paddingBottom: 60,
            margin: 10,
            borderRadius: 10,
            zIndex: 1,
          }}>
          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>

          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>
          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 25,
            width: '60%',
            alignSelf: 'center',
            //     position: 'absolute',
            marginTop: -40,
            zIndex: 2,
            padding: 15,
            justifyContent: 'space-around',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Jungle Safari</Text>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Image
              source={require('../../assets/third.png')}
              style={{height: 20, width: 20}}></Image>
            <Text style={{opacity: 0.6}}>1st jan 2018- 20 jan 2018 </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>January</Text>
          <Text>2 challenge</Text>
        </View>
        <View
          style={{
            backgroundColor: '#ebcdae',
            alignContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20,
            paddingBottom: 60,
            margin: 10,
            borderRadius: 10,
            zIndex: 1,
          }}>
          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>

          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>
          <View>
            <Image
              source={{
                uri:
                  'https://cdn.pixabay.com/photo/2019/04/25/20/52/amur-tiger-4155922__340.jpg',
              }}
              style={{height: 80, width: 80, borderRadius: 15}}
            />
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                flexDirection: 'row',
                borderRadius: 10,
                padding: 5,
                position: 'absolute',
                marginTop: 60,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
              }}>
              <Image
                source={require('../../assets/first.png')}
                style={{height: 30, width: 30}}></Image>
              <Text style={{opacity: 0.7, alignContent: 'center'}}>1st</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 25,
            width: '60%',
            alignSelf: 'center',
            //     position: 'absolute',
            marginTop: -40,
            zIndex: 2,
            padding: 15,
            justifyContent: 'space-around',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Jungle Safari</Text>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Image
              source={require('../../assets/third.png')}
              style={{height: 20, width: 20}}></Image>
            <Text style={{opacity: 0.6}}>1st jan 2018- 20 jan 2018 </Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
