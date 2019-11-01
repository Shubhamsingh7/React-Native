/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class Assignment12 extends React.Component {
  static navigationOptions = {
    title: 'Assignment12',
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
      imageLink: '',
      isclicked: false,
      isMultipleClicked: true,
      ImageArray: [],
    };
  }

  ImageNotClicked = () => {
    if (!this.state.isclicked) {
      return (
        <Image
          style={{height: 200, width: 200, borderRadius: 100}}
          source={require('./blank-profile-picture-973460_1280.png')}
        />
      );
    } else {
      return <></>;
    }
  };
  ImageClicked = () => {
    if (this.state.isclicked) {
      return (
        <Image
          style={{height: 200, width: 200, borderRadius: 100}}
          source={{uri: this.state.imageLink}}
        />
      );
    } else {
      return <></>;
    }
  };
  MultipleImageLoad = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
    }).then(image => {
      console.warn(image[0].path);
      this.setState(() => {
        return {
          ImageArray: this.state.ImageArray.concat(image),
          isMultipleclicked: true,
        };
      });
    });
  };
  MultipleImage = () => {
    if (this.state.isMultipleClicked) {
      return (
        <FlatList
          data={this.state.ImageArray}
          renderItem={({item}) => {
            <Image
              source={{uri: item.path}}
              style={{height: 100, width: 100, margin: 20}}
            />;
          }}></FlatList>
      );
    } else {
      return (
        <>
          <Text>dbjcdjbcbc</Text>
        </>
      );
    }
  };

  Image = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      this.setState(() => {
        return {
          imageLink: image.path,
          isclicked: true,
        };
      });
    });
  };

  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView>
          <View>
            <TouchableOpacity onPress={() => this.Image()}>
              <this.ImageNotClicked />
              <this.ImageClicked />
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                this.MultipleImageLoad();
              }}>
              <View>
                <Text>select multiple image</Text>
              </View>
            </TouchableOpacity>
            <this.MultipleImage /> */}
          </View>
        </SafeAreaView>
      </>
    );
  }
}
