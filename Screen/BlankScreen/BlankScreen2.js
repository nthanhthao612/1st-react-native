import React, { Component } from "react";
import { View } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class BlankScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reload: false
        }
    }
    async componentDidMount() {
        let {navigation} = this.props;
        let userData = await axios.get("http://192.168.1.218:7000/api/user/info");
        await AsyncStorage.setItem('userData', JSON.stringify(userData.data));
        const { data } = await axios.
            get("http://192.168.1.218:7000/api/healthcare/getfinal");
        await AsyncStorage.setItem('healthcare', JSON.stringify(data));
        
        const message = await axios.get("http://192.168.1.218:7000/api/message/get");
            console.log(message);
            // await AsyncStorage.setItem('chatBoxList',JSON.stringify(message));
        navigation.navigate("MainNavigator");
    }
    render() {
        return <View>
        </View>;
    }
}