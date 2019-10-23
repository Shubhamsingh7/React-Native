import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export const Card = function(props) {
  
  return (
    <View style={styles.cardView}>
      <View style={styles.mainView}>
        <View>
          <Image
            source={{uri: props.list.picture.large}}
            style={styles.imageView}
          />
        </View>
        <View style={{justifyContent: 'space-around'}}>
          <Text style={styles.nameText}>
            {props.list.name.title} {props.list.name.first}{' '}
            {props.list.name.last}
          </Text>
          <Text style={styles.mobileText}>{props.list.cell}</Text>
          <Text>{props.list.location.country}</Text>
        </View>
      </View>
      <View>
        
        <Text style ={{margin:15,fontSize:20,fontStyle:"italic"}}>{props.list.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    justifyContent: 'space-around',
    backgroundColor: '#ebeff0',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 11,
    shadowRadius: 6.68,
    shadowOpacity: 0.36,
  },
  imageView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    resizeMode:"cover",
  },
  nameText: {
    fontSize: 20,
    fontStyle: 'italic',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  mobileText: {
    opacity: 0.7,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
