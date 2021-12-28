import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Dimensions } from 'react-native';

import NumeralVerticalBox5 from '../NumeralCom/NumeralVerticalBox5';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import HeartBeatIcon from "../../img/heartbeat.png";

class StatisticsBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { HeartBeat,Date } = this.props.item;
        // console.log(this.props.item.HeartBeat.numeral);
        return <View style={styles.container}>
            <NumeralVerticalBox5
                icon={HeartBeatIcon}
                value={`${HeartBeat.numeral} ${HeartBeat.unit?HeartBeat.unit:""}`} />
            <View style={
                {
                    flexDirection:"column",
                    alignItems:"center",
                }
            }>
                <Text style={{ fontWeight: "bold",fontSize: 12}}>{Date}</Text>
                <Text style={{ fontWeight: "bold",fontSize: 12}}>{HeartBeat.time}</Text>
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