import React, { Component }  from 'react';
import {View,Text} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';

export default class SettingsScreen extends Component{
    async componentDidMount(){
        await AsyncStorage.clear();
    }
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}