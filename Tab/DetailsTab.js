import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../Screen/DetailScreen/Details';
import FootStep from '../Screen/DetailScreen/Footstep';
import BMInumberal from '../Screen/DetailScreen/BMInumberal';
import SleepingTime from '../Screen/DetailScreen/SleepingTime';
import HeartBeat from '../Screen/DetailScreen/HeartBeat';
import BloodPressure from '../Screen/DetailScreen/BloodPressure';


const Stack = createNativeStackNavigator();

function DetailsTab({navigation,route}){
    return <Stack.Navigator 
        screenOptions={({route})=>({
            headerShown:(route.name==="MainDetails"?false:true),
        })
    }
    >
        <Stack.Screen name="MainDetails" component={DetailsScreen}/>
        <Stack.Screen name="Footstep" component={FootStep}/>
        <Stack.Screen name="SleepingTime" component={SleepingTime}/>
        <Stack.Screen name="BloodPressure" component={BloodPressure}/>
        <Stack.Screen name="BMInumberal" component={BMInumberal}/>
        <Stack.Screen name="HeartBeat" component={HeartBeat}/>
    </Stack.Navigator>
}

export default DetailsTab;