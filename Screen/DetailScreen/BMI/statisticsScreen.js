import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

import StatisticsBox from '../../../Components/BMIcomponent/statisticsBox';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class StatisticsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRecorded: []
        }
    }
    componentDidMount() {
        let { listRecorded } = this.props.route.params;
        let tempArray = [];
        listRecorded.map((item) => {
            tempArray = [
                {
                    BMI: item.BMI,
                    Date: item.Date
                }, ...tempArray
            ];
        });
        this.setState({
            listRecorded: tempArray
        })
    }
    render() {
        let { listRecorded } = this.state;
        console.log(listRecorded)
        return <FlatList
            data={listRecorded}
            renderItem={({ item }) => <StatisticsBox item={item} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.container}
        />
    }
}
export default StatisticsScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: "column",
        alignItems: "center",
    }
});