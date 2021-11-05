import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class LoginInputComponent extends Component {
    render() {
        return <View style={styles.container}>
            <View style={styles.textInput}>
                <TextInput placeholder="UserName" />
                <TextInput placeholder="Password" />
            </View>
            <View style={styles.buttonInput}>
                <View><Text>Login</Text></View>
                <View><Text>Register</Text></View>
            </View>
        </View>
    }
}
export default LoginInputComponent;

const styles = StyleSheet.create({
    container: {
        flexGrow: 4
    },
    textInput: {

    },
    buttonInput: {
        flexDirection: "row"
    }
});