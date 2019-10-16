import React from "react";
import {
        View,
        Text,
        Button,
        TextInput,
        StyleSheet,
        TouchableOpacity,
} from 'react-native';
import { bold } from "ansi-colors";
import { italic } from "colorette";


export default class Form extends React.Component {
        render() {
                return (
                        <View>
                                <View style={styles.header}>
                                        <Text style={styles.headerText}>First Sample</Text>
                                </View>
                                <View style={{ flexDirection: "column", justifyContent: "space-around", }}>

                                        <View style={{ flexDirection: "column", justifyContent: "space-around", height: 150 }}>
                                                <View style={styles.form}>
                                                        <Text style={styles.formText}>Name</Text>
                                                        <TextInput placeholder={"Enter name here"} style={styles.formTextInput}>
                                                        </TextInput>
                                                </View>
                                                <View style={styles.form}>
                                                        <Text style={styles.formText}>Password</Text>
                                                        <TextInput placeholder={"*********"} style={styles.formTextInput}>
                                                        </TextInput>
                                                </View>
                                        </View>
                                        <View>

                                                <TouchableOpacity style={styles.touchableBuuton}>
                                                        <Text style={styles.formText}>Login</Text>
                                                </TouchableOpacity>
                                        </View>
                                </View>
                        </View>
                );
        }
}


const styles = StyleSheet.create(
        {
                header: {
                        backgroundColor: "skyblue",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 31,
                        height: 50,
                },
                headerText: {
                        fontSize: 25,
                        fontStyle: "italic",
                },
                form: {

                        backgroundColor: "white",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginLeft: 10,
                        marginRight: 10,

                },
                formText: {
                        fontSize: 20,
                        fontWeight: "bold",

                },
                formTextInput: {
                        backgroundColor: "#cce0df",
                        borderRadius: 10,
                        fontSize: 20,
                        height: 40,
                        width: 200,
                        paddingLeft: 10,
                },
                touchableBuuton: {
                        backgroundColor: "green",
                        // margin:40,
                        paddingLeft: 130,
                        paddingRight: 130,
                        borderRadius: 25,
                        paddingBottom: 15,
                        paddingTop: 15,
                        alignSelf: "center",

                }

        }
);