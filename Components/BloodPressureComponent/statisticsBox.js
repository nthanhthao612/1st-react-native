import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Dimensions } from 'react-native';

import NumeralVerticalBox1 from '../NumeralCom/NumeralVerticalBox1';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class StatisticsBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { Date,BloodPressure} = this.props.item;
        return <View style={styles.container}>
            <NumeralVerticalBox1
                name={"Tâm thu"}
                value={`${BloodPressure.systolic} ${BloodPressure.unit?BloodPressure.unit:""}`} />
            <NumeralVerticalBox1
                name={"Tâm trương"}
                value={`${BloodPressure.diastolic} ${BloodPressure.unit?BloodPressure.unit:""}`} />
            <View style={
                {
                    flexDirection:"column",
                    alignItems:"center",
                }
            }>
                <Text style={{ fontWeight: "bold",fontSize: 12}}>{Date}</Text>
                <Text style={{ fontWeight: "bold",fontSize: 12}}>{BloodPressure.time}</Text>
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