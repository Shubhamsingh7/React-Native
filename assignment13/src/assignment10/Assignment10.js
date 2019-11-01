import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from 'react-native';

export default class Assignment10 extends Component {
  static navigationOptions = {
    title: 'Assignment10',
    headerStyle: {
      backgroundColor: '#2fb1bd',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  onRefresh = () => {
    Alert('sjgsgdjjgds');
  };

  constructor(props) {
    super(props);
    this.state = {
      userDataArray: [],
      isLoading: true,
      numberOfPage: 0,
      isGoToTopVisible: true,
      currentPage: 1,
      refresh: false,
      api: 'https://reqres.in/api/users?page=',
    };
  }
  componentDidMount() {
    return fetch(this.state.api + this.state.currentPage)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          userDataArray: responseJson.data,
          contentPerPage: responseJson.per_page,
          numberOfPage: responseJson.total_pages,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  GoToTop = () => {
    return (
      <View
        style={{
          alignSelf: 'flex-end',
          position: 'absolute',
          zIndex: 30,
        }}>
        <Image source={{uri: './arrow.png'}} styles={{height: 30, width: 30}} />
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <StatusBar backgroundColor="blue" barStyle="dark-content" />
          <SafeAreaView>
            <ActivityIndicator size="large" color="red" />
          </SafeAreaView>
        </>
      );
    } else {
      return (
        <>
          <SafeAreaView>
            <FlatList
              onEndReachedThreshold={0.01}
              // refreshControl={
              //   <RefreshControl
              //     refreshing={true}
              //     onRefresh={() => {
              //       Alert('sjjsj');
              //     }}
              //   />
              // }

              onEndReached={() => {
                this.setState(state => {
                  return {
                    currentPage: this.state.currentPage + 1,
                  };
                });

                if (this.state.currentPage <= this.state.numberOfPage) {
                  fetch(this.state.api + this.state.currentPage)
                    .then(response => response.json())
                    .then(responseJson => {
                      this.setState({
                        userDataArray: this.state.userDataArray.concat(
                          responseJson.data,
                        ),
                      });
                    })
                    .catch(error => {
                      console.error(error);
                    });
                }
              }}
              data={this.state.userDataArray}
              renderItem={({item}) => {
                return (
                  <View style={styles.cardView}>
                    <View style={styles.mainView}>
                      <View>
                        <Image
                          source={{uri: item.avatar}}
                          style={styles.imageView}
                        />
                      </View>
                      <View style={{justifyContent: 'space-around'}}>
                        <Text style={styles.nameText}>
                          {item.first_name} {item.last_name}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={{
                          margin: 15,
                          fontSize: 20,
                          fontStyle: 'italic',
                        }}>
                        {item.email}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />

            {<this.GoToTop />}
          </SafeAreaView>
        </>
      );
    }
  }
}

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
    resizeMode: 'cover',
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
