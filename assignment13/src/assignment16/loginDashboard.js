import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class LoginDash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
      email: '',
    };
    this.getCurrentUser();
  }

  signOut = async () => {
    try {
      //       this.revokeAccess();
      await GoogleSignin.signOut();
      this.setState(() => {
        return {name: '', image: '', email: ''};
      });

      this.props.navigation.navigate('Home');
      this.props.navigation.navigate('Google');
    } catch (error) {
      console.error(error);
    }
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({
      name: currentUser.user.name,
      email: currentUser.user.email,
      image: currentUser.user.photo,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.image}} style={styles.image}></Image>
        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.email}</Text>
        <TouchableOpacity style={styles.button} onPress={this.signOut}>
          <Text style={{fontSize: 20}}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 0.5,
    marginTop: 100,
    alignItems: 'center',
    //     backgroundColor: '#e6f2f1',
    padding: 30,
    margin: 20,
    borderRadius: 20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },

  Input: {
    width: '90%',
    height: 40,
    margin: 10,
    marginTop: 25,
    padding: 5,
    paddingLeft: 15,
    fontSize: 20,
    //     borderColor: '#e6f2f1',
    borderWidth: 1,
    borderRadius: 20,
  },
  button: {
    width: '40%',
    backgroundColor: '#3385e8',
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    color: '#20c6e3',
    marginBottom: 30,
  },
  keyboard: {
    //     padding: ,
    flex: 1,
  },
});
