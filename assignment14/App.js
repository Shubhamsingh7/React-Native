import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EditFile from './edit';
import ImagePicker from 'react-native-image-crop-picker';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      imageArray: '',
    };
  }
  pickSingle() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    })
      .then(imageUrl => {
        this.setState({imageArray: imageUrl.path});
        console.log('datahjasvxhja', this.state.imageArray.path);
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  render() {
    return (
      <>
        <View style={{flex: 1, marginTop: 20, marginLeft: 20}}>
          <Text style={{fontSize: 20}}>First Name</Text>
          <TextInput
            onChangeText={fname => this.setState({fname})}
            style={{
              fontSize: 15,
              height: 40,
              borderRadius: 10,
              backgroundColor: '#fff',
              borderColor: '#000',
              borderWidth: 2,
              marginRight: 20,
              marginTop: 10,
            }}
          />
          <Text>{this.props.navigation.getParam('fname1')}</Text>
          <Text style={{fontSize: 20, marginTop: 20}}>Last Name</Text>
          <TextInput
            onChangeText={lname => this.setState({lname})}
            style={{
              fontSize: 15,
              height: 40,
              borderRadius: 10,
              backgroundColor: '#fff',
              borderColor: '#000',
              borderWidth: 2,
              marginRight: 20,
              marginTop: 10,
            }}>
            <Text>{this.props.navigation.getParam('lname1')} </Text>
          </TextInput>
          <TouchableOpacity
            style={{
              backgroundColor: 'pink',
              height: 45,
              marginLeft: 100,
              borderRadius: 20,
              fontWeight: 100,
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              width: 180,
            }}
            onPress={() =>
              this.props.navigation.navigate('Edit', {
                fname: this.state.fname,
                lname: this.state.lname,
                image: this.state.imageArray,
              })
            }>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pickSingle(false)}>
            <Text
              style={{
                marginTop: 50,
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 150,
              }}>
              Get Pic
            </Text>
          </TouchableOpacity>
          <Image
            source={{uri: this.state.imageArray}}
            style={{
              height: 150,
              borderColor: 'black',
              borderWidth: 2,
              width: 150,
              backgroundColor: 'black',
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 120,
            }}
          />
        </View>
      </>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Navigation,
    Edit: EditFile,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
