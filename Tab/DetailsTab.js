import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import DetailsScreen from '../Screen/DetailScreen/Details';
import FootStepsNavigation from '../Screen/DetailScreen/FootSteps/FootStepsNavigation';
import BmiNavigation from '../Screen/DetailScreen/BMI/BmiNavigation';
import SleepingTimesNavigation from '../Screen/DetailScreen/SleepingTimes/SleepingTimesNavigation';
import HeartBeatNavigation from '../Screen/DetailScreen/HeartBeat/HeartBeatNavigation';
import BloodPressureNavigation from '../Screen/DetailScreen/BloodPressure/BloodPressureNavigation';


const Stack = createNativeStackNavigator();

class DetailsTab extends Component {
    constructor(props) {
        super(props);
        
    }
    async componentDidMount() {
        // .
        // then(function(data){
        //     let temp = data.data;
        //     AsyncStorage.setItem('healthcare',JSON.stringify(temp))
        //     .then(async function(data){{
        //     }});
        // })
    }
    render() {
        let { navigation, route } = this.props;
        return <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: (route.name === "MainDetails"
                    || route.name === "Update"
                    || route.name === "Statistics"
                    ? false : true),
            })
            }
        >
            <Stack.Screen name="MainDetails" component={DetailsScreen} />
            <Stack.Screen name="footsteps" component={FootStepsNavigation} />
            <Stack.Screen name="bloodPressure" component={BloodPressureNavigation} />
            <Stack.Screen name="sleepingTime" component={SleepingTimesNavigation} />
            <Stack.Screen name="BMI" component={BmiNavigation} />
            <Stack.Screen name="heartBeat" component={HeartBeatNavigation} />
        </Stack.Navigator>
    }
}


export default DetailsTab;