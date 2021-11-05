import React, { Component } from "react";
import {View,Text } from "react-native";

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Register!</Text>
        </View>
    }
}

export default RegisterScreen;