import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

export default function Relative(props) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.mainImage} source={{uri: props.imageUrl}} />
        <Image
          style={styles.acceptImage}
          source={require('../Assets/Images/accept.png')}
        />
      </View>
      <Text style={styles.relationStyle}>{props.relation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  acceptImage: {
    marginTop: -10,
    alignSelf: 'center',
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  mainImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  relationStyle: {
    textAlign: 'center',
  },
});
