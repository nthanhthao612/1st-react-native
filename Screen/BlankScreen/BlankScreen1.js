import React, { Component } from "react";
import { View } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class BlankScreen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reload: false
        }
    }
    async componentDidMount() {
        // await AsyncStorage.clear()
        const { navigation } = this.props;
        let token = await AsyncStorage.getItem('token');
        if (token === null) 
            navigation.navigate("Authentication")
        else{
            axios.defaults.headers.common['Authorization'] = token;
            let userData = await axios.get("http://192.168.1.218:7000/api/user/info");
            await AsyncStorage.setItem('userData', JSON.stringify(userData.data));
            
            const { data } = await axios.
                get("http://192.168.1.218:7000/api/healthcare/getfinal");
            await AsyncStorage.setItem('healthcare', JSON.stringify(data));

            let message = await axios.get("http://192.168.1.218:7000/api/message/get");
            await AsyncStorage.setItem('chatBoxList',JSON.stringify(message.data));
            navigation.navigate("MainNavigator");
        }  
    }
    render() {
        return <View>
        </View>;
    }
}