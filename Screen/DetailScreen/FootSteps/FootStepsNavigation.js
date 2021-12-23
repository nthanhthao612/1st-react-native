import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FootStepsScreen from './FootStepsScreen';
import StatisticsScreen from './statisticsScreen';
import UpdateScreen from './updateScreen';

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
        {/* <Stack.Screen name="Update" component={UpdateScreen}/> */}
    </Stack.Navigator>
}
export default FootStepsNavigation;