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
    // async componentDidMount() {
    //     const { data } = await axios.
    //         get("http://192.168.1.218:7000/api/healthcare/getfinal");
    //     await AsyncStorage.setItem('healthcare', JSON.stringify(data));
    // }
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
            <Stack.Screen name="Footsteps" component={FootStepsNavigation} />
            <Stack.Screen name="BloodPressure" component={BloodPressureNavigation} />
            <Stack.Screen name="SleepingTime" component={SleepingTimesNavigation} />
            <Stack.Screen name="BMI" component={BmiNavigation} />
            <Stack.Screen name="HeartBeat" component={HeartBeatNavigation} />
        </Stack.Navigator>
    }
}

// function DetailsTab({ navigation, route }) {

// }

export default DetailsTab;