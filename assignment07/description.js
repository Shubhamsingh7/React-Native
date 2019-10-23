import React from "react";
import {
        View,
        Text,
        StyleSheet,
        Image,
} from "react-native";



export const Description = function () {
        return (
                <React.Fragment>
                        <Text style={styles.DescriptionHeading}>
                                Description
                        </Text>
                        <Text style={styles.descriptiomMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                </React.Fragment>
        );
}

export const Rules = function () {
        return (
                <React.Fragment>
                        <Text style={styles.DescriptionHeading}>
                                Rules
                        </Text>
                        <View style={styles.checkView}>
                                <Image
                                        source={require("./assets/check.png")}
                                />
                                <Text style={styles.descriptiomMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                        </View>
                        <View style={styles.checkView}>
                                <Image
                                        source={require("./assets/check.png")}
                                />
                                <Text style={styles.descriptiomMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                        </View>
                        <View style={styles.checkView}>
                                <Image
                                        source={require("./assets/check.png")}
                                />
                                <Text style={styles.descriptiomMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                        </View>
                        <View style={styles.checkView}>
                                <Image
                                        source={require("./assets/check.png")}
                                />
                                <Text style={styles.descriptiomMessage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                        </View>


                </React.Fragment>
        );
}


const styles = StyleSheet.create(
        {
                DescriptionHeading: {
                        fontSize: 20,
                        fontWeight: "bold",
                        margin: 8,
                },
                descriptiomMessage: {
                        justifyContent: "flex-end",
                        marginLeft: 25,
                        marginBottom: 10,
                        opacity: 0.7,
                },
                checkView: {
                        flexDirection: "row",
                        justifyContent: "space-around",
                }
        }
);
