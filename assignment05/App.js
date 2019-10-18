import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  FlatList,
  Image
} from 'react-native';



export default class APP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Email: "",
      Company: "",
      isSubmitPressed: false,
      empData: [],
      counter:0,
      isEmpty: true,
    };

  }


remove = (counter,arr)=>{
  var tempArr = []
  for(let i= 0;i<this.state.empData.length;i++){
    if(i != counter){
      tempArr.push(this.state.empData[i]);
    }
  }
  this.state.empData=tempArr;
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
    this.setState( ()=> this.state.isEmpty=false
    )

    let object = {
      id: new Date().getTime(),
      name: this.state.name,
      email: this.state.Email,
      company: this.state.Company
    }

    let empData = this.state.empData;

    empData.push(object);


  }



  renderDetails = ({ item }) => {
    if (this.state.isEmpty) {
      return (
        <View></View>
      );
    }
else{
    return (
      <View style={styles.detailShow}>
        <View style = {{flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity onPress={this.validateValue} >
        <Image source={require('./assests/edit.png')} style ={ {height:28,width:28}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.validateValue} >
        <Image source={require('./assests/delete.png')} style ={ {height:28,width:28}} />
        </TouchableOpacity>
        </View>
        
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
              style={{ flex: 1 }}
              data={this.state.empData}
              renderItem={

                this.renderDetails


              }
            />


          </View>
        </ScrollView>
      </View>
    );

    this.setState({ empData: empData });
    this.setState({ name: "" });
    this.setState({ Email: "" });
    this.setState({ Company: "" });
    this.setState({
      isEmpty: true
    })
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