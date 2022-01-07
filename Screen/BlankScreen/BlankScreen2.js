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
        let userData = await axios.get(`${global.urladdress}/api/user/info`);
        await AsyncStorage.setItem('userData', JSON.stringify(userData.data));
        navigation.navigate("MainNavigator");
    }
    render() {
        return <View>
        </View>;
    }
}