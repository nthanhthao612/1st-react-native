import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeartBeatScreen from './HeartBeatScreen';
import StatisticsScreen from './statisticsScreen';

const Stack = createNativeStackNavigator();

function HeartBeatNavigation({ navigation, route }) {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false
        }
        }
    >
        <Stack.Screen name="Overview" component={HeartBeatScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
    </Stack.Navigator>
}
export default HeartBeatNavigation;