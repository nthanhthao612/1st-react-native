import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Dimensions } from 'react-native';

import NumeralVerticalBox5 from '../NumeralCom/NumeralVerticalBox5';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import TemperatureIcon from '../../img/temperature.png';

class StatisticsBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {BodyTemperature , Date } = this.props.item;
        return <View style={styles.container}>
        <NumeralVerticalBox5
            value={`${BodyTemperature.numeral} ${BodyTemperature.unit}`}
            icon={TemperatureIcon} />
        <View style={
            {
                flexDirection:"column",
                alignItems:"center",
            }
        }>
            <Text style={{ fontWeight: "bold",fontSize: 12}}>{Date}</Text>
            <Text style={{ fontWeight: "bold",fontSize: 12}}>{BodyTemperature.time}</Text>
        </View>
    </View>;
    }
}
export default StatisticsBox;   

let styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        borderWidth: 1,
        height: ScreenHeight * 18 / 100,
        width: ScreenWidth * 94 / 100,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 10,
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 0.9, 
        shadowOffset: { width: 0, height: 0 }
    }
});