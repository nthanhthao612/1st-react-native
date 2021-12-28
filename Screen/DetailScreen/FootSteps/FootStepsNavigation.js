import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FootStepsScreen from './FootStepsScreen';
import StatisticsScreen from './statisticsScreen';

const Stack = createNativeStackNavigator();

function FootStepsNavigation({ navigation, route }) {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false
        }
        }
    >
        <Stack.Screen name="Overview" component={FootStepsScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
}
export default FootStepsNavigation;