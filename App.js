import React, { Component, useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthenticationNavigator from './AuthenticationNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation, route } = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Authentication" component={AuthenticationNavigator} />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
