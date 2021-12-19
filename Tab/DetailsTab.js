import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../Screen/DetailScreen/Details';
import FootStepsScreen from '../Screen/DetailScreen/Footsteps';
import BmiNavigation from '../Screen/DetailScreen/BMI/BmiNavigation';
import SleepingTimeScreen from '../Screen/DetailScreen/SleepingTime';
import HeartBeatScreen from '../Screen/DetailScreen/HeartBeat';
import BloodPressureScreen from '../Screen/DetailScreen/BloodPressure';


const Stack = createNativeStackNavigator();

function DetailsTab({navigation,route}){
    return <Stack.Navigator 
        screenOptions={({route})=>({
            headerShown:(route.name==="MainDetails" 
            || route.name==="Update"
            || route.name==="Statistics"
            ?false:true),
        })
    }
    >
        <Stack.Screen name="MainDetails" component={DetailsScreen}/>
        <Stack.Screen name="Footsteps" component={FootStepsScreen}/>
        <Stack.Screen name="SleepingTime" component={SleepingTimeScreen}/>
        <Stack.Screen name="BloodPressure" component={BloodPressureScreen}/>
        <Stack.Screen name="BMI" component={BmiNavigation}/>
        <Stack.Screen name="HeartBeat" component={HeartBeatScreen}/>
    </Stack.Navigator>
}

export default DetailsTab;