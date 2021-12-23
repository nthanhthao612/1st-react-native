import React, { Component, lazy } from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import LastRecordedCom from '../../../Components/SleepingTimesComponent/LastRecordedCom';
import Button5 from "../../../Components/ButtonCom/Button5";
import StatisticsIcon from "../../../img/statistics.png";
import NumeralBox5 from '../../../Components/NumeralCom/NumeralBox5';
import SunIcon from '../../../img/sun.png';
import MoonIcon from '../../../img/moon.png';

class SleepingTimesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRecorded: {},
            lastRecorded: {},
            lastDate: ""
        }
    }
    async componentDidMount() {
        let healthCare = JSON.parse(
            await AsyncStorage.getItem('healthcare'));
        let { listRecorded } = healthCare;
        let lastRecorded = JSON.parse(
            await AsyncStorage.getItem('lastRecorded'));
        let { sleepingTimes } = lastRecorded;
        this.setState(state => {
            return {
                listRecorded: listRecorded,
                lastRecorded: sleepingTimes,
            }
        });
        this.setState(state =>{
            return{
                lastDate: this.state.listRecorded[this.state.listRecorded.length-1].Date
            }
        })
    }
    NumeralToTime(numeral){
        let data = {};
        data.hour = Math.floor(numeral/3600);
        data.minute = Math.floor((numeral-data.hour*3600)/60);
        data.second = numeral - data.hour*3600 - data.minute*60;
        return data;
    }
    render() {
        let { lastRecorded,listRecorded,lastDate} = this.state;
        let {navigation} = this.props;
        let time = this.NumeralToTime(lastRecorded.numeral);
        return <View style={styles.container}>
            <LastRecordedCom 
            time={time}
            data={lastRecorded}
            lastDate={lastDate}
            />
            <View style={styles.Start_End}>
                <NumeralBox5 
                    icon={MoonIcon}
                    value={lastRecorded.start}
                />
                <NumeralBox5 
                    icon={SunIcon}
                    value={lastRecorded.end}
                />
            </View>
            <View style={styles.ButtonArea}>
                <Button5 
                icon={StatisticsIcon}
                name={"Lịch sử"}
                onClicked={()=>navigation.navigate("Statistics",{listRecorded:listRecorded})}
                />
            </View>
        </View>
    }
}

export default SleepingTimesScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
    },
    Start_End: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "20%",
        width: "90%",
        borderWidth:1
    },
    ButtonArea:{
        marginTop: 15,
        flexDirection: 'row',
        width:"100%",
        justifyContent: "space-around",
    }
});