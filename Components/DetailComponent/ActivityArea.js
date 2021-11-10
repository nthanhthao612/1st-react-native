import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image } from 'react-native';

import BloodPressure from "../../img/blood-pressure.png";
import Bmi from "../../img/bmi.png";
import HeartBeat from "../../img/heartbeat.png";
import Sleeping from "../../img/sleeping.png";
import FootStep from "../../img/footstep.png";

import Numberal from './Numberal';

class ActivityArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return <View style={styles.container}>
            <View style={styles.IconArea}>
                <Image source={data.picture} style={styles.pictureIcon}></Image>
            </View>
            <Numberal data={data}></Numberal>
            <View style={styles.Rate}>
                <Text >Bình thường</Text>
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
        width: 50,
        height: 50
    },
    Rate: {
        flexGrow: 1,
        alignItems:'flex-end'
    }
});
export default ActivityArea;
