import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BMIScreen from './BMIScreen';
import StatisticsScreen from './statisticsScreen';

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
    </Stack.Navigator>
}
export default BmiNavigation;