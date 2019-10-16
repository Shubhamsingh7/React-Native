import React from "react";
import {
        FlatList,
        View,
        Text,
        TextInput,
        StyleSheet,
        TouchableOpacity,
        Image,
} from 'react-native';

export default class Card extends React.Component {
        Data = [
                { 
                        url: 'https://images.pexels.com/photos/434433/pexels-photo-434433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        brand:"Jaguar",
                        description:"this is jaguar car",   
                 },
                { 
                        url: 'https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        brand:"ferrari",
                        description:"this is ferrari car"
                 },
                
        ]
        render() {
                return (
                        <View style={styles.mainView}>


                                <View>
                                        <Image source={{ uri: "https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", height: 80, width: 80 }}></Image>
                                </View>
                                <View>
                                        <FlatList data={this.Data} renderItem={({ item }) => <Image source={{ uri: item.url, height: 80, width: 80 }}></Image>}>
                                        </FlatList>      
                                        {/* <FlatList data = {this.Data} renderItem = {({item}) =><Text>{item.key}></Text>}>

                                        </FlatList> */}
{/*                                         
                                        <Text style={styles.LargeText}>hjhfjkgfghj</Text> */}
                                                        {/* <Text style={styles.SmallText}>aquaired by tata</Text> */}
                                        
        
                                </View>
                                        <View>
                                                <Text style={styles.SmallText}>$ 2M</Text>
                                        </View>

                                </View>
                                );
                        }
                }
                
                const styles = StyleSheet.create(
        {
                                        mainView: {
                                        flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 50,
                                backgroundColor: "#74bcdb",
                                borderRadius: 5,
                        },
                SmallText: {
                                        fontSize: 15,
                                alignSelf: "center",
                                flexDirection: "column",
                                justifyContent: "center",
                        },
                LargeText: {
                                        fontSize: 20
                        }
                }
        );
        
