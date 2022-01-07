import React, { Component } from 'react';
import {StyleSheet, FlatList } from 'react-native';
import { Dimensions } from 'react-native';

import StatisticsBox from '../../../Components/BloodPressureComponent/statisticsBox';

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
                    BloodPressure: item.bloodPressure,
                    Date: item.Date
                }, ...tempArray
            ];
        });
        this.setState({
            listRecorded: tempArray
        })
    }
    render() {
        let {listRecorded} = this.state;
        return <FlatList
            data={listRecorded}
            renderItem={({item})=><StatisticsBox item={item}/>}
            keyExtractor={(item,index)=>index.toString()}
            contentContainerStyle={styles.container}
        />
    }
}
export default StatisticsScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection:"column",
        alignItems: "center",
    }
});