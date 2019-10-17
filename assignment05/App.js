import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  FlatList
} from 'react-native';
import { italic } from "colorette";
import { url } from "inspector";



export default class APP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Email: "",
      Company: "",
      isSubmitPressed: false,
      empData: [],
      isEmpty:true,
    };

  }




  validateValue = () => {
    let isValidate = true;
    if (this.state.name == "") {
      alert("Enter Name");
      isValidate = false;

    }
    else if (this.state.Email == "") {
      alert("Enter Email");
      isValidate = false;
    }
    else if (this.state.Company == "") {
      alert("Enter Company Name");
      isValidate = false;
    }
    if (isValidate) {
      this.setState({ isSubmitPressed: true });
    }
    this.setState({
      isEmpty:false
    })
    
    let object = {
      id: new Date().getTime(),
      name: this.state.name,
      email: this.state.Email,
      company: this.state.Company
    }

    let empData = this.state.empData;

    empData.push(object);

    this.setState({ empData: empData });
    this.setState({name:""});
    this.setState({Email:""});
    this.setState({Company:""});
    this.setState({
      isEmpty:true
    })

  }



  renderDetails = ({ item }) => {
    if(this.state.isEmpty){
      return(
        <View></View>
      );
    }
    
    return (
      <View style={styles.detailShow}>
        <Image source = {url:""}></Image>
        <Text style={{
          fontSize: 25,
          margin: 5,
          alignSelf: "center",
          fontWeight: "500",
        }}>{item.name}</Text>
        <Text
          style={{
            fontSize: 15,
            margin: 5,
            alignSelf: "flex-start"
          }}
        >{item.email}</Text>
        <Text
          style={{
            fontSize: 20,
            margin: 5,
            alignSelf: "flex-end",
            fontStyle: "italic",
          }}
        >{item.company}</Text>
      </View>
    );
  }




  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#1799bf", }}>

        <ScrollView >
          <View style={styles.mainView}>
            <Text style={{ alignSelf: "center", fontSize: 30, marginBottom: 15, marginTop: 10 }}>User Detail's</Text>
            <View>
              <TextInput placeholder={"Name"} style={styles.textInputStyle}
                onChangeText={(nameInput) => this.setState({ name: nameInput })}


              ></TextInput>
            </View>

            <View>
              <TextInput placeholder={"Email"} style={styles.textInputStyle}

                onChangeText={(text) => this.setState({ Email: text })}></TextInput>
            </View>

            <View>
              <TextInput placeholder={"Company"} style={styles.textInputStyle}

                onChangeText={(text) => this.setState({ Company: text })}></TextInput>
            </View>


            <TouchableOpacity style={styles.button} onPress={this.validateValue} >
              <Text style={styles.submitButton}>Submit</Text>
            </TouchableOpacity>



            <FlatList
              style={{ flex: 1}}
              data={this.state.empData}
              renderItem={
              
                  this.renderDetails
                
                
              }
            />
            

          </View>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create(
  {
    mainView: {
      flex: 1,
      justifyContent: "space-around",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 50,
      paddingBottom: 50,
    },
    textInputStyle: {
      height: 60,
      backgroundColor: "white",
      marginTop: 10,
      borderRadius: 15,
      marginBottom: 10,
      paddingLeft: 10,
      fontSize: 20,
    },
    submitButton: {
      fontSize: 15,

      alignSelf: "center",


    },
    button: {
      borderRadius: 15,
      backgroundColor: "green",
      marginTop: 10,
      marginLeft: 15,
      height: 30,
      height: 50,
      marginRight: 15,
    },
    detailShow: {
      flexDirection: "column",
      alignContent: "center",
      padding: 20,
      justifyContent: "space-between",
      margin: 15,
      borderRadius: 10,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.6,
      shadowRadius: 7.49,

      elevation: 12,

    },
    text: {
      fontSize: 20,
      marginLeft: 10,
      marginRight: 10,

    }

  }
)