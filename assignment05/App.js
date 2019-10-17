import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';


export default class APP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Email: "",
      Company: "",
      isSubmitPressed:false,
    };
    
  }


  validateValue = () =>{
      this.setState(this.state.isSubmitPressed,true);   
    if(this.state.name == ""){
      alert("Enter Name");
    }
    else if(this.state.Email == ""){
      alert("Enter Email");
    }
    else if(this.state.Company == ""){
      alert("Enter Company Name");
    }

  }


  renderDetails = () =>{
             if(this.state.isSubmitPressed){
               return(
                 <View>
                   <Text>{this.state.name}</Text>
                   <Text>{this.state.Company}</Text>
                   <Text>{this.state.Email}</Text>
                 </View>
               );
             }
  }







  
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor: "#1799bf",}}> 
      
      <ScrollView >
        <View style={styles.mainView}>
        <Text style = {{alignSelf:"center",fontSize:30,marginBottom:15,marginTop:10}}>User Detail's</Text>
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
          {this.renderDetails}
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
      fontSize: 30,
      fontStyle: "italic",
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
      flexDirection: "row",
      justifyContent: "space-between",
    },text:{
      fontSize:20,
      marginLeft:10,
      marginRight:10,

    }

  }
)