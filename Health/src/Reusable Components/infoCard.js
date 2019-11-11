import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Balance from '../Reusable Components/Balance';
import BalanceUsed from '../Reusable Components/BalanceUsed';
import Relative from '../Reusable Components/Relative';
import History from '../Reusable Components/History';
import Details from '../Reusable Components/Details';
import {widthPercentageToDP} from 'react-native-responsive-screen';
export default class InfoCard extends Component {
  constructor() {
    super();
    this.state = {
      balance: '2.000.000',
      balanceUsed: '4.320.000',
    };
  }
  render() {
    return (
      <React.Fragment>
        <View style={styles.firstLine}>
          <Text style={styles.healthInsuranceStyle}>Health Insurance</Text>
          <TouchableOpacity style={styles.cardDetailsButton}>
            <Text style={styles.cardDetailsText}>Card Details ></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.balanceCard}>
          <BalanceUsed
            balanceUsed={this.state.balance}
            balanceText=" Balance"
          />
          <BalanceUsed
            balanceUsed={this.state.balanceUsed}
            balanceText="Balance Used"
          />
        </View>
        <View style={styles.relativeContainer}>
          <View>
            <Image
              style={styles.mainImage}
              source={require('../Assets/Images/pexels-photo-756453.jpeg')}
            />
            <Image
              style={styles.acceptImage}
              source={require('../Assets/Images/accept.png')}
            />
            <Text style={styles.relation}>Wife</Text>
          </View>
          <View>
            <Image
              style={styles.mainImage}
              source={require('../Assets/Images/child-children-girl-happy.jpg')}
            />
            <Image
              style={styles.acceptImage}
              source={require('../Assets/Images/accept.png')}
            />
            <Text style={styles.relation}>Child</Text>
          </View>

          <View>
            <Image
              style={styles.mainImage}
              source={require('../Assets/Images/more.png')}
            />
            <Image
              style={styles.acceptImage}
              source={require('../Assets/Images/accept.png')}
            />
            <Text style={styles.relation}>add</Text>
          </View>
          <View>
            <Image
              style={styles.mainImage}
              source={require('../Assets/Images/more.png')}
            />
            <Image
              style={styles.acceptImage}
              source={require('../Assets/Images/accept.png')}
            />
            <Text style={styles.relation}>add</Text>
          </View>
          <Text style={styles.i}>I</Text>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.mainImage}
              source={require('../Assets/Images/transfer.png')}
            />

            <Text style={styles.benefit}>Benefit transfer</Text>
          </View>
        </View>
        <History />
        <Details
          extraStyle={{backgroundColor: '#ffcbd6'}}
          category="Health and beauty"
          doller="4.000.000 VND"
        />
        <Details
          extraStyle={{backgroundColor: '#064053', color: '#fff'}}
          category="Course and Training"
          doller="2.000.000 VND"
        />
        <Details
          extraStyle={{backgroundColor: '#f9dece'}}
          category="Business trip cost"
          doller=""
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 15,
    paddingTop: 15,
    marginTop: -20,
    backgroundColor: '#fff',
  },
  i: {
    fontSize: 90,
    fontWeight: '100',
    marginTop: -wp('5%'),
    //     marginLeft: -20,
    opacity: 0.4,
  },
  relation: {
    textAlign: 'center',
    fontSize: wp('3.5%'),
  },
  healthInsuranceStyle: {
    fontSize: widthPercentageToDP('5%'),
    fontWeight: '500',
  },
  cardDetailsButton: {
    backgroundColor: '#00886f',
    borderRadius: 20,
    padding: wp('0.9%'),
    paddingLeft: wp('1.9%'),
    paddingRight: wp('1.9%'),
    marginRight: -30,
    justifyContent: 'flex-end',
  },
  benefit: {marginTop: 9, fontSize: wp('3.5%')},
  cardDetailsText: {
    color: '#fff',
    fontSize: wp('3%'),
  },
  balanceCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: wp('2.5%'),
  },
  relativeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: wp('2%'),
  },
  mainImage: {
    height: wp('15%'),
    width: wp('15%'),
    borderRadius: wp('7.5%'),
  },
  acceptImage: {
    marginTop: -wp('3%'),
    alignSelf: 'center',
    height: wp('5%'),
    width: wp('5%'),
  },
});
