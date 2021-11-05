import React, { Component, useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./Screen/AuthenticationScreen/LoginScreen";
import RegisterScreen from "./Screen/AuthenticationScreen/RegisterScreen";

const Stack = createNativeStackNavigator();




export default class AuthenticationNavigator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation, route } = this.props;
        return (
            <Stack.Navigator screenOptions={
                {headerShown:false}
            }>
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="register" component={RegisterScreen}/>
            </Stack.Navigator>
        );
    }
}
