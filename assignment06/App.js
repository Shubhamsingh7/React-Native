import React,{Component} from "react";
import { 
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  
} from "react-native";

import Video from 'react-native-video';






export default class Collection extends Component{
  
  renderCollectionCell = ({item}) =>{
    // if(item.id == 0){
    //   return(
        
    //     <Video source={require('./assets/video.mp4')}   // Can be a URL or a localfile.
    //      ref={(ref) => {
    //        this.player = ref
    //      }}                                      // Store reference
    //      onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //      onEnd={this.onEnd}                      // Callback when playback finishes
    //      onError={this.videoError}               // Callback when video cannot be loaded
    //       />
      
    //   );
    // }
    // else{
      return(
        <View>
          <Image
          source = {{uri:item.url}}
          style = {styles.imageView}
          resizeMode = {"cover"}
          
          />
        </View>
      );
    


  }


  data = [
    {
      id:1,
      url:"https://images.pexels.com/photos/2983461/pexels-photo-2983461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:2,
      url:"https://images.pexels.com/photos/1899631/pexels-photo-1899631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:3,
      url:"https://images.pexels.com/photos/1549196/pexels-photo-1549196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:4,
      url:"https://images.pexels.com/photos/1123567/pexels-photo-1123567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:5,
      url:"https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:6,
      url:"https://images.pexels.com/photos/2832023/pexels-photo-2832023.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:7,
      url:"https://images.pexels.com/photos/2115578/pexels-photo-2115578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:8,
      url:"https://images.pexels.com/photos/2929211/pexels-photo-2929211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:9,
      url:"https://images.pexels.com/photos/2575280/pexels-photo-2575280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id:10,
      url:"https://images.pexels.com/photos/2387872/pexels-photo-2387872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }
   ]
render(){
  return(
    <View style = {styles.superView}>
      <FlatList
      data = {this.data}
      renderItem = {this.renderCollectionCell}
      numColumns = {3}

      >

        
      </FlatList>
    </View>

  );
}

}


styles = StyleSheet.create(
  {
    imageView:{
      height:110,
      width:110,
      margin:5,
      borderRadius:10
    },
    superView:{
      flex:1,
      paddingTop:50,
      // flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#cfe8e4",
    },
  }
  
)