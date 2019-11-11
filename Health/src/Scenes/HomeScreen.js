import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Header from '../Reusable Components/Header';
import InfoCard from '../Reusable Components/infoCard';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571__340.jpg',
      name: 'Marcus Hoang',
      level: 3,
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header
          imageUrl={this.state.imageUrl}
          name={this.state.name}
          level={this.state.level}
        />
        <InfoCard />
      </React.Fragment>
    );
  }
}
