import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class Assignment04 extends Component {
  static navigationOptions = {
    title: 'Assignment04',
    headerStyle: {
      backgroundColor: '#2fb1bd',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      Email: '',
      Phone: '',
      Company: '',
      Designation: '',
      Profile: '',
      Address: '',
      showDetails: false,
    };
  }

  onPressSubmit = () => {
    this.setState({showDetails: !this.state.showDetails});
  };

  renderDetails = () => {
    if (this.state.showDetails) {
      return (
        <View style={styles.mainView}>
          <View style={styles.detailShow}>
            <Text style={styles.text}>Name</Text>
            <Text style={styles.text}>{this.state.name}</Text>
          </View>
          <View style={styles.detailShow}>
            <Text style={styles.text}>Email</Text>
            <Text style={styles.text}>{this.state.Email}</Text>
          </View>
          <View style={styles.detailShow}>
            <Text style={styles.text}>Phone</Text>
            <Text style={styles.text}>{this.state.Phone}</Text>
          </View>
          <View style={styles.detailShow}>
            <Text style={styles.text}>Company</Text>
            <Text style={styles.text}>{this.state.name}</Text>
          </View>
          <View style={styles.detailShow}>
            <Text style={styles.text}>Designation</Text>
            <Text style={styles.text}>{this.state.Designation}</Text>
          </View>
          <View style={styles.detailShow}>
            <Text style={styles.text}>Profile</Text>
            <Text style={styles.text}>{this.state.profile}</Text>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.mainView}>
          <View>
            <TextInput
              placeholder={'Name'}
              style={styles.textInputStyle}
              onChangeText={text => this.setState({name: text})}
              value={this.state.n}></TextInput>
          </View>

          <View>
            <TextInput
              placeholder={'Email'}
              style={styles.textInputStyle}
              value={this.state.Email}
              onChangeText={text => this.setState({Email: text})}></TextInput>
          </View>
          <View>
            <TextInput
              placeholder={'Phone'}
              style={styles.textInputStyle}
              value={this.state.Phone}
              onChangeText={text => this.setState({Phone: text})}></TextInput>
          </View>
          <View>
            <TextInput
              placeholder={'Company'}
              style={styles.textInputStyle}
              value={this.state.Company}
              onChangeText={text => this.setState({Company: text})}></TextInput>
          </View>
          <View>
            <TextInput
              placeholder={'Designation'}
              style={styles.textInputStyle}
              value={this.state.Designation}
              onChangeText={text =>
                this.setState({Designation: text})
              }></TextInput>
          </View>
          <View>
            <TextInput
              placeholder={'Profile'}
              style={styles.textInputStyle}></TextInput>
          </View>
          <View>
            <TextInput
              placeholder={'Address'}
              style={styles.textInputStyle}></TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.onPressSubmit}>
            <Text style={styles.submitButton}>Submit</Text>
          </TouchableOpacity>
          {this.renderDetails()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#1799bf',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  textInputStyle: {
    height: 60,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 15,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 20,
  },
  submitButton: {
    fontSize: 30,
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 15,
    backgroundColor: 'green',
    marginTop: 10,
    marginLeft: 15,
    height: 30,
    height: 50,
    marginRight: 15,
  },
  detailShow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
