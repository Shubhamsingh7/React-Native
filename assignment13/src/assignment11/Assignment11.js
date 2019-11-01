import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

export default class Assignment11 extends React.Component {
  static navigationOptions = {
    title: 'Assignment11',
    headerStyle: {
      backgroundColor: '#2fb1bd',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
    };
  }
  //   openImage = () => {
  //     {
  //         width: 300,
  //         height: 400,
  //         cropping: true
  //     }).then(image => {
  //       console.log(image);
  //     }
  // }
  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openPicker({
              width: 100,
              height: 100,
              cropping: true,
            }).then(image => {
              console.warn(image);
              this.setState(() => {
                return {imagePath: image.path};
              });
            });
          }}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: 'red',
              marginTop: 100,
              alignSelf: 'center',
            }}
            source={{uri: this.state.imagePath}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
