import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
