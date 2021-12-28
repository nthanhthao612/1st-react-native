import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BlackScreen1 from './Screen/BlankScreen/BlankScreen1';
import BlackScreen2 from './Screen/BlankScreen/BlankScreen2';
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
          initialRouteName="BlankScreen1"
        >
          <Stack.Screen name="BlankScreen1" component={BlackScreen1} />
          <Stack.Screen name="BlankScreen2" component={BlackScreen2} />
          <Stack.Screen name="MainNavigator" component={MainNavigator} />
          <Stack.Screen name="Authentication" component={AuthenticationNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
