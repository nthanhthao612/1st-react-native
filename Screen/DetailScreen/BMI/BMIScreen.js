import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import EditIcon from "../../../img/edit.png";
import LastRecordedCom from '../../../Components/BMIcomponent/LastRecordedCom';
import HeightIcon from "../../../img/height.png";
import WeightIcon from "../../../img/weight.png";
import Button5 from "../../../Components/ButtonCom/Button5";
import StatisticsIcon from "../../../img/statistics.png";
import NumeralBox5 from '../../../Components/NumeralCom/NumeralBox5';


class BMIScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRecorded: {},
            lastRecorded: {},
            lastDate: "",
            healthcareID: "",
        }
        this.DoneButtonPressed = this.DoneButtonPressed.bind(this);
    }
    async componentDidMount() {
        let { _id, listRecorded } = JSON.parse(await AsyncStorage.getItem('healthcare'));
        let lastRecorded = JSON.parse(await AsyncStorage.getItem('lastRecored'));
        let { BMI } = lastRecorded;
        this.setState(state => {
            return {
                listRecorded: listRecorded,
                lastRecorded: BMI,
                healthcareID: _id,
                lastDate: lastRecorded.data
            }
        });
    }
    async DoneButtonPressed() {
        let {navigation} = this.props;
        let { healthcareID } = this.state;
        await axios.post(`${global.urladdress}/api/healthcare/updatebmi`, { data: healthcareID });
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
            <View style={styles.height_weight}>
                <NumeralBox5
                    icon={HeightIcon}
                    value={lastRecorded.height}
                />
                <NumeralBox5
                    icon={WeightIcon}
                    value={lastRecorded.weight}
                />
            </View>
            <View style={styles.ButtonArea}>
                <Button5
                    icon={EditIcon}
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

export default BMIScreen;

let styles = StyleSheet.create({
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
    },
    RefreshBtnArea: {
        height: "30%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    }
});