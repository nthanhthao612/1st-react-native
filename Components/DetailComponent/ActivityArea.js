import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import BloodPressure from "../../img/blood-pressure.png";
import Bmi from "../../img/bmi.png";
import HeartBeat from "../../img/heartbeat.png";
import Sleeping from "../../img/sleeping.png";
import FootStep from "../../img/footstep.png";

import Numberal from './Numeral';

class ActivityArea extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { data } = this.props;
        if (data.keyword === "sleepingTime")
            this.props.data.picture = Sleeping;
        else if (data.keyword === "footsteps")
            this.props.data.picture = FootStep;
        else if (data.keyword === "heartBeat")
            this.props.data.picture = HeartBeat;
        else if (data.keyword === "BMI")
            this.props.data.picture = Bmi;
        else
            this.props.data.picture = BloodPressure;
    }
    render() {
        const { data } = this.props;
        return <View style={styles.container}>
            <View style={styles.IconArea}>
                <Image source={data.picture} style={styles.pictureIcon}></Image>
            </View>
            <Numberal data={data}></Numberal>
            <View style={styles.Rate}>
                <Text >{data.Rate}</Text>
            </View>

        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 5,
        flexDirection: 'row',
        alignItems: "center"
    },
    IconArea: {
        flexGrow: 1
    },
    pictureIcon: {
        width: ScreenHeight*6/100,
        height: ScreenHeight*6/100
    },
    Rate: {
        flexGrow: 1,
        alignItems: 'flex-end'
    }
});
export default ActivityArea;
