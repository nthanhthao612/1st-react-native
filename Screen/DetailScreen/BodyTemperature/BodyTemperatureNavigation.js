import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BodyTemperatureScreen from './BodyTemperatureScreen.js';
import StatisticsScreen from './statisticsScreen';

const Stack = createNativeStackNavigator();

function BodyTemperationNavigation({ navigation, route }) {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false
        }
        }
    >
        <Stack.Screen name="Overview" component={BodyTemperatureScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
}
export default BodyTemperationNavigation;