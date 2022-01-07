import React, { Component } from "react";
import { View } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class BlankScreen1 extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() { 
        // await AsyncStorage.clear()
        // console.log(global.urladdress);
        const { navigation } = this.props;
        let token = await AsyncStorage.getItem('token');
        if (token === null) 
            navigation.navigate("Authentication")
        else{
            axios.defaults.headers.common['Authorization'] = token;
            let userData = await axios.get(`${global.urladdress}/api/user/info`);
            await AsyncStorage.setItem('userData', JSON.stringify(userData.data));
        }  
    }
    render() {
        return <View>
        </View>;
    }
}