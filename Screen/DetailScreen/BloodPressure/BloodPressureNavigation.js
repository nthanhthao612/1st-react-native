import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BloodPressureScreen from './BloodPressureScreen';
import StatisticsScreen from './statisticsScreen';

const Stack = createNativeStackNavigator();

function BloodPressureNavigation({ navigation, route }) {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false
        }
        }
    >
        <Stack.Screen name="Overview" component={BloodPressureScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
}
export default BloodPressureNavigation;