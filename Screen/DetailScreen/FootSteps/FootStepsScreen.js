import React, { Component, lazy } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import LastRecordedCom from '../../../Components/FootStepsComponent/LastRecordedCom';
import Button5 from "../../../Components/ButtonCom/Button5";
import StatisticsIcon from "../../../img/statistics.png";
import UpdatingIcon from "../../../img/updating.png";

class FootStepsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRecorded: {},
            lastRecorded: {},
            lastDate: "",
            healthcareID: ""
        }
        this.DoneButtonPressed = this.DoneButtonPressed.bind(this);
    }
    async componentDidMount() {
        let { _id, listRecorded } = JSON.parse(await AsyncStorage.getItem('healthcare'));
        let lastRecorded = JSON.parse(await AsyncStorage.getItem('lastRecored'));
        let { footSteps } = lastRecorded;
        this.setState(state => {
            return {
                listRecorded: listRecorded,
                lastRecorded: footSteps,
                healthcareID: _id,
                lastDate: lastRecorded.data
            }
        });
    }
    async DoneButtonPressed() {
        let {healthcareID} = this.state;
        await axios.post(`${global.urladdress}/api/healthcare/updatefootsteps`,{data:healthcareID});
        let {navigation} = this.props;
        navigation.replace("MainDetails");
    }
    render() {
        let { lastRecorded, listRecorded, lastDate } = this.state;
        let { navigation } = this.props;
        return <View style={styles.container}>
            <LastRecordedCom
                data={lastRecorded}
                lastDate={lastDate}
            />
            <View style={styles.ButtonArea}>
                <Button5
                    icon={UpdatingIcon}
                    name={"Cập Nhật"}
                    onClicked={this.DoneButtonPressed}
                />
                <Button5
                    icon={StatisticsIcon}
                    name={"Lịch sử"}
                    onClicked={() => navigation.navigate("Statistics", { listRecorded: listRecorded })}
                />
            </View>
        </View>
    }
}

export default FootStepsScreen;

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
    ButtonArea: {
        marginTop: 20,
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-around",
    }
});