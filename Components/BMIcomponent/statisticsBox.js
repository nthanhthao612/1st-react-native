import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

import NumeralVerticalBox5 from '../NumeralCom/NumeralVerticalBox5';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import HeightIcon from "../../img/height.png";
import WeightIcon from "../../img/weight.png";
import BMIIcon from "../../img/bmi.png"

class StatisticsBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { item } = this.props;
        return <View style={styles.container}>
            <NumeralVerticalBox5
                value={`${item.BMI.height} CM`}
                icon={HeightIcon} />
            <NumeralVerticalBox5
                value={`${item.BMI.weight} KG`}
                icon={WeightIcon} />
            <NumeralVerticalBox5
                value={item.BMI.numeral}
                icon={BMIIcon} />
            <View style={
                {
                    flexDirection:"column",
                    alignItems:"center",
                }
            }>
                <Text style={{ fontWeight: "bold",fontSize: 12}}>{item.Date}</Text>
                <Text style={{ fontWeight: "bold",fontSize: 12 }}>{item.BMI.time}</Text>
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