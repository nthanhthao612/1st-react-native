import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BMIScreen from './BMIScreen';
import StatisticsScreen from './statisticsScreen';
import UpdateScreen from './updateScreen';

const Stack = createNativeStackNavigator();

function BmiNavigation({ navigation, route }) {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false
        }
        }
    >
        <Stack.Screen name="Overview" component={BMIScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        {/* <Stack.Screen name="Update" component={UpdateScreen}/> */}
    </Stack.Navigator>
}
export default BmiNavigation;