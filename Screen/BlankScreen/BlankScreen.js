import React, { Component } from "react";
import { View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default class BlankScreen extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const { navigation } = this.props;
        if (await AsyncStorage.getItem('token')) {
            navigation.navigate("MainNavigator");
        } else
            navigation.navigate("Authentication");
    }
    render() {
        return <View>
        </View>;
    }
}