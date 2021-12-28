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
        let { BMI,Date } = this.props.item;
        return <View style={styles.container}>
            <NumeralVerticalBox5
                value={`${BMI.height} CM`}
                icon={HeightIcon} />
            <NumeralVerticalBox5
                value={`${BMI.weight} KG`}
                icon={WeightIcon} />
            <NumeralVerticalBox5
                value={BMI.numeral}
                icon={BMIIcon} />
            <View style={
                {
                    flexDirection:"column",
                    alignItems:"center",
                }
            }>
                <Text style={{ fontWeight: "bold",fontSize: 12}}>{Date}</Text>
                <Text style={{ fontWeight: "bold",fontSize: 12 }}>{BMI.time}</Text>
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
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 0.9, 
        shadowOffset: { width: 0, height: 0 }
    }
});