import React, { Component, lazy } from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import LastRecordedCom from '../../../Components/BloodPressureComponent/LastRecordedCom';
import Button5 from "../../../Components/ButtonCom/Button5";
import UpdatingIcon from "../../../img/updating.png";
import StatisticsIcon from "../../../img/statistics.png";

class BloodPressureScreen extends Component {
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
        let { bloodPressure } = lastRecorded;
        this.setState(state => {
            return {
                listRecorded: listRecorded,
                lastRecorded: bloodPressure,
            }
        });
        this.setState(state =>{
            return{
                lastDate: this.state.listRecorded[this.state.listRecorded.length-1].Date
            }
        })
    }
    render() {
        let { lastRecorded,listRecorded,lastDate} = this.state;
        let {navigation} = this.props;
        return <View style={styles.container}>
            <LastRecordedCom 
            data={lastRecorded}
            lastDate={lastDate}
            />
            <View style={styles.ButtonArea}>
                <Button5 
                icon={UpdatingIcon}
                name={"Cập Nhật"}
                onClicked={()=>navigation.navigate("Update",{lastRecorded:lastRecorded})}
                />
                <Button5 
                icon={StatisticsIcon}
                name={"Lịch sử"}
                onClicked={()=>navigation.navigate("Statistics",{listRecorded:listRecorded})}
                />
            </View>
        </View>
    }
}

export default BloodPressureScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
    },
    height_weight: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "10%",
        width: "95%"
    },
    ButtonArea:{
        marginTop: 20,
        flexDirection: 'row',
        width:"100%",
        justifyContent: "space-around",
    }
});