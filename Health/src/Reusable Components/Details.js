import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Details(props) {
  return (
    <TouchableOpacity>
      <View style={[styles.container, props.extraStyle]}>
        <Text style={[styles.text, props.extraStyle]}>{props.category}</Text>
        <Text style={[styles.text, props.extraStyle]}>{props.doller}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: wp('5%'),
    borderTopRightRadius: wp('5%'),

    alignItems: 'center',
    backgroundColor: 'red',
    height: wp('22%'),
    marginTop: -wp('5%'),
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  text: {
    textAlign: 'justify',
    fontSize: wp('4%'),
  },
});
