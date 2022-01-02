import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import ListCalendarScreen from '../Screen/SettingScreen/ListCalendarScreen';
import SettingScreen from "../Screen/SettingScreen/SettingScreen";

class SettingTab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation, route } = this.props;
        return (
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerShown: route.name=="MainSetting"?false:true,
                    
                })
                }
                initialRouteName="MainSetting"
            >
                <Stack.Screen name="MainSetting" component={SettingScreen} />
                <Stack.Screen name="ListCalendarScreen" component={ListCalendarScreen} />
            </Stack.Navigator>
        );
    }
}


export default SettingTab;