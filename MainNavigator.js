import React, { Component, useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsTab from './Tab/DetailsTab';
import OverviewTab from './Tab/OverviewTab';
import ChatTab from './Tab/ChatTab';

function SettingsScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>

    );
}

const Tab = createBottomTabNavigator();




export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation, route } = this.props;
        return (
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Details') {
                            iconName = 'clipboard-outline';
                        } else if (route.name === 'Settings') {
                            iconName = 'settings-outline';
                        } else if (route.name === 'Overview') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Chat') {
                            iconName = 'md-chatbox-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarActiveBackgroundColor: "#EFEFEF",
                    tabBarInactiveBackgroundColor: "#fff",
                    tabBarLabelStyle: {
                        fontWeight: "bold",
                        fontSize: 12
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'black',
                })}
                >
                    <Tab.Screen name="Overview" component={OverviewTab} />
                    <Tab.Screen name="Details" component={DetailsTab} />
                    <Tab.Screen name="Chat" component={ChatTab} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
        );
    }
}
