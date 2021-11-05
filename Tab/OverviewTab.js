import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View ,StyleSheet} from 'react-native';

import OverviewScreen from '../Screen/OverviewScreen/OverviewScreen';
const Stack = createNativeStackNavigator();

function OverviewTab({navigation,route}){
    return <Stack.Navigator 
        screenOptions={({route})=>({
            headerShown:false
        })
    }
    >
        <Stack.Screen name="OverviewScreen" component={OverviewScreen}/>

    </Stack.Navigator>
}

export default OverviewTab;