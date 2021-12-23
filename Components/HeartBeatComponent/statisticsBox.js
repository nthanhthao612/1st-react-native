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
        let { item } = this.props;
        return <View style={styles.container}>
            <NumeralVerticalBox1
                name={"Tâm thu"}
                value={item.BloodPressure.systolic} />
            <NumeralVerticalBox1
                name={"Tâm trương"}
                value={item.BloodPressure.diastolic} />
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
        margin: 10,
        borderWidth: 1,
        height: ScreenHeight * 18 / 100,
        width: ScreenWidth * 94 / 100,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    }
});