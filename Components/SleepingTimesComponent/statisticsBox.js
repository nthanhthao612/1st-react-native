import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

import NumeralVerticalBox5 from '../NumeralCom/NumeralVerticalBox5';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import SunIcon from "../../img/sun.png";
import MoonIcon from "../../img/moon.png";
import SleepingIcon from "../../img/sleeping.png";

class StatisticsBox extends Component {
    constructor(props) {
        super(props);
    }
    NumeralToTime(numeral){
        let data = {};
        data.hour = Math.floor(numeral/3600);
        data.minute = Math.floor((numeral-data.hour*3600)/60);
        data.second = numeral - data.hour*3600 - data.minute*60;
        return data;
    }
    render() {
        let { item } = this.props;
        let time = this.NumeralToTime(item.sleepingTimes.numeral);
        let {hour,minute,second} = time;
        return <View style={styles.container}>
            <NumeralVerticalBox5
                value={`${item.sleepingTimes.start} `}
                icon={MoonIcon} />
            <NumeralVerticalBox5
                value={`${item.sleepingTimes.end} `}
                icon={SunIcon} />
            <NumeralVerticalBox5
                value={`${hour} giờ ${minute} phút ${second} giây`}
                icon={SleepingIcon} />
            <View style={
                {
                    flexDirection:"column",
                    alignItems:"center",
                }
            }>
                <Text style={{ fontWeight: "bold",fontSize: 12}}>{item.Date}</Text>
            </View>
        </View>;
    }
}
export default StatisticsBox;   

let styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:"space-around",
        margin: 10,
        borderWidth: 1,
        height: ScreenHeight * 18 / 100,
        width: ScreenWidth * 94 / 100,
        backgroundColor: "lightgray",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 0.9, 
        shadowOffset: { width: 0, height: 0 }
    }
});