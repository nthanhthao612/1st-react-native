import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SleepingTimesScreen from './SleepingTimesScreen';
import StatisticsScreen from './statisticsScreen';

const Stack = createNativeStackNavigator();

function SleepingTimesNavigation({ navigation, route }) {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false
        }
        }
    >
        <Stack.Screen name="Overview" component={SleepingTimesScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
}
export default SleepingTimesNavigation;