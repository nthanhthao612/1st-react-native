import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

class numeral extends Component {
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
        const { data } = this.props;
        if(data.keyword == "sleepingTime"){
            let value = this.NumeralToTime(data.numeral)
            data.temp = `${value.hour} giờ ${value.minute} phút ${value.second}`;
        }
        return <View style={styles.container}>
            <Text style={styles.numeralInside}>{`${data.temp?data.temp:data.numeral} ${data.unit}`}</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        alignItems: "center"
    },
    numeralInside: {
        fontWeight: "bold"
    }
});
export default numeral;