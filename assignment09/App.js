import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
// import {TabView, SceneMap} from 'react-native-tab-view';

import Header from './component/header/header';
import CardSuperView from './component/cardComponent/cardSuperView';

export default class MainView extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{backgroundColor: '#f2850f', flex: 0.06}}></View>

        <SafeAreaView style={styles.mainViewStyle}>
          <View style={styles.mainViewStyle}>
            <Header />
            <ScrollView>
              <CardSuperView />
            </ScrollView>
            {/* <TabBarIOS></TabBarIOS>
             */}
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
});
