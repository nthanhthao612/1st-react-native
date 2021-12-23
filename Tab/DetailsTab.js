import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../Screen/DetailScreen/Details';
import FootStepsNavigation from '../Screen/DetailScreen/FootSteps/FootStepsNavigation';
import BmiNavigation from '../Screen/DetailScreen/BMI/BmiNavigation';
import SleepingTimesNavigation from '../Screen/DetailScreen/SleepingTimes/SleepingTimesNavigation';
import HeartBeatNavigation from '../Screen/DetailScreen/HeartBeat/HeartBeatNavigation';
import BloodPressureNavigation from '../Screen/DetailScreen/BloodPressure/BloodPressureNavigation';


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
        <Stack.Screen name="Footsteps" component={FootStepsNavigation}/>
        <Stack.Screen name="BloodPressure" component={BloodPressureNavigation}/>
        <Stack.Screen name="SleepingTime" component={SleepingTimesNavigation}/>
        <Stack.Screen name="BMI" component={BmiNavigation}/>
        <Stack.Screen name="HeartBeat" component={HeartBeatNavigation}/>
    </Stack.Navigator>
}

export default DetailsTab;