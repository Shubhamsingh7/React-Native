import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import ToDoList from '../Store/TodoState';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

@observer
export default class ToDo extends Component {
  constructor(props) {
    super(props);
  }
  handelSubmission = value => {
    value.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          <Text style={styles.header}>TODO LIST</Text>

          <View style={styles.toDoslist}>
            <Text style={styles.toDoHeader}>
              number of To Do's are: {ToDoList.toDoSize}
            </Text>
            <Text style={styles.toDoHeader}>To Do's are</Text>
            <FlatList
              data={ToDoList.toDoArrayList.slice()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    padding: wp('1%'),

                    margin: wp('2%'),
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: wp('5%'), color: 'white'}}>
                    . {item}
                  </Text>
                </View>
              )}
            />
          </View>
          <View>
            <TextInput
              style={styles.toDoInput}
              placeholder={'add next TO DO'}
              onChangeText={text => (ToDoList.name = text)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => ToDoList.addNewToDo()}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: wp('10%'),
    fontStyle: 'italic',
  },
  toDoHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: wp('5%'),
    textAlign: 'center',
  },
  toDoslist: {
    margin: wp('5%'),
    backgroundColor: '#8e9c9b',
    padding: wp('2%'),
    borderRadius: wp('3%'),
    height: hp('65%'),
  },
  toDoInput: {
    alignSelf: 'center',
    borderRadius: wp('5%'),
    borderWidth: wp('0.5%'),
    //     padding: wp('5%'),
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    height: wp('10%'),
    fontSize: wp('5%'),
    marginLeft: wp('15%'),
    marginRight: wp('15%'),
    width: wp('70%'),
  },
  button: {
    height: wp('10%'),
    width: wp('40%'),
    backgroundColor: '#307782',
    alignSelf: 'center',
    borderRadius: wp('5%'),
    justifyContent: 'center',
    marginTop: wp('3%'),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: wp('5%'),
    color: '#fff',
  },
});
