import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../Screen/DetailScreen/Details';
import BmiNavigation from '../Screen/DetailScreen/BMI/BmiNavigation';
import SleepingTimesNavigation from '../Screen/DetailScreen/SleepingTimes/SleepingTimesNavigation';
import HeartBeatNavigation from '../Screen/DetailScreen/HeartBeat/HeartBeatNavigation';
import BloodPressureNavigation from '../Screen/DetailScreen/BloodPressure/BloodPressureNavigation';
import BodyTemperatureNavigation from '../Screen/DetailScreen/BodyTemperature/BodyTemperatureNavigation';


const Stack = createNativeStackNavigator();

class DetailsTab extends Component {
    constructor(props) {
        super(props);
        
    }
    async componentDidMount() {
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
            <Stack.Screen name="bodyTemperature" component={BodyTemperatureNavigation} />
            <Stack.Screen name="bloodPressure" component={BloodPressureNavigation} />
            <Stack.Screen name="sleepingTime" component={SleepingTimesNavigation} />
            <Stack.Screen name="BMI" component={BmiNavigation} />
            <Stack.Screen name="heartBeat" component={HeartBeatNavigation} />
        </Stack.Navigator>
    }
}


export default DetailsTab;