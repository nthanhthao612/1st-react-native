import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import OverviewScreen from '../Screen/OverviewScreen/OverviewScreen';
const Stack = createNativeStackNavigator();

class OverviewTab extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false
            })
            }
        >
            <Stack.Screen name="OverviewScreen" component={OverviewScreen} data={this.state} />
        </Stack.Navigator>
    }
}


export default OverviewTab;