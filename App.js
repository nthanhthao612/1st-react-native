import React, { Component, useState, useEffect, useRef } from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BlackScreen from './Screen/BlankScreen/BlankScreen';
import AuthenticationNavigator from './AuthenticationNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();


export default class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }} 
          initialRouteName="BlankScreen"
        >
          <Stack.Screen name="BlankScreen" component={BlackScreen} />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen name="Authentication" component={AuthenticationNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
