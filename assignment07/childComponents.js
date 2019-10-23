import React from 'react';
import {Image, StyleSheet} from 'react-native';

ImageView = function(props) {
  return <Image style={styles.imageStyle} source={{uri: props.imageUrl}} />;
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'row',
  },
});

export default ImageView;
