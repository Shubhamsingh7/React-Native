import React from 'react';
import {RNS3} from 'react-native-aws3';
import PickImageFromGallery from './Component/imagePicker';
import upLoadImage from './Component/imageUploader';
import I18n from './Component/Translations/translation';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  ProgressViewIOS,
} from 'react-native';

export default class Assignment14 extends React.Component {
  static navigationOptions = {
    title: 'Assignment14',
    headerStyle: {
      backgroundColor: '#2fb1bd',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor() {
    super();
    this.state = {
      filePath: '',
      loadImage: false,
      webImage: '',
      progressNumber: 0,
    };
  }

  setFile = () => {
    //     console.warn('file param set');
    file = {
      uri: 'file://' + this.state.filePath,
      name: 'image.png',
      type: 'image/jpeg',
    };

    upLoadImage(file, response => {
      this.setState(() => {
        return {
          webImage: response.postResponse.location,
          // progressNumber:
        };
      });
    });
  };

  render() {
    return (
      <>
        <StatusBar></StatusBar>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, alignSelf: 'center'}}>
              {' '}
              {I18n.t('setImage')}
            </Text>

            <TouchableOpacity
              onPress={() =>
                PickImageFromGallery.getSinglePic(path => {
                  this.setState(() => {
                    //     console.warn(path);
                    return {filePath: path};
                  });
                  //   console.warn(this.state.filePath);
                })
              }>
              <Image
                source={{uri: this.state.filePath}}
                style={{
                  height: 200,
                  width: 200,
                  backgroundColor: '#ffc',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>{I18n.t('webImage')}</Text>
            <TouchableOpacity onPress={() => this.setFile()}>
              <Image
                source={{uri: this.state.webImage}}
                style={{
                  height: 200,
                  width: 200,
                  backgroundColor: '#ffc',
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
