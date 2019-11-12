import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  CheckBox,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class FlatListCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <Image source={{uri: props.imageUrl}} />
        </View>
        <View>
          <Text>{props.name}</Text>
          <Text>{props.country}</Text>
        </View>
        <View>
          <CheckBox></CheckBox>
          <TouchableOpacity>
            <Image source={require('')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
