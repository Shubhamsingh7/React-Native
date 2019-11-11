import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.imageAndNameContainer}>
            <TouchableOpacity>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{uri: this.props.imageUrl}}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.textContainer}>
              <Text style={styles.textName}>{this.props.name}</Text>
              <Text style={styles.textLevel}>Level {this.props.level}</Text>
            </View>
            <Image
              source={require('../Assets/Images/cloud.png')}
              style={styles.cloudImage}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('18%'),
    marginBottom: hp('1%'),
    backgroundColor: '#00886f',
  },
  imageAndNameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageView: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: hp('5%'),
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
  },
  image: {
    width: hp('10%'),
    height: hp('10%'),
    borderWidth: 2,
    borderRadius: hp('5%'),
    borderColor: '#00886f',
  },
  textName: {
    color: '#fff',
    fontSize: wp('5%'),
  },
  textLevel: {
    fontFamily: 'CircularStd-Book',
    color: '#fff',
    fontSize: wp('5%'),
    opacity: 0.5,
  },
  textContainer: {
    justifyContent: 'center',
  },
  cloudImage: {
    height: hp('10%'),
    width: hp('20%'),
    resizeMode: 'contain',
    marginLeft: wp('15%'),
  },
});
