import React, { Component} from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import EditIcon from "../../../img/edit.png";
import LastRecordedCom from '../../../Components/BMIcomponent/LastRecordedCom';
import HeightIcon from "../../../img/height.png";
import WeightIcon from "../../../img/weight.png";
import Button5 from "../../../Components/ButtonCom/Button5";
import RefreshIcon from "../../../img/updating.png";
import StatisticsIcon from "../../../img/statistics.png";
import NumeralBox5 from '../../../Components/NumeralCom/NumeralBox5';


class BMIScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRecorded: {},
            lastRecorded: {},
            lastDate: "",
            reload: true
        }
        this.EditBtnClicked = this.EditBtnClicked.bind(this);
        this.RefreshBtnClicked = this.RefreshBtnClicked.bind(this);
    }
    async componentDidMount() {
        console.log("BMI MOUNT");
        await AsyncStorage.removeItem('healthcare');
        const { data } = await axios.
            get("http://192.168.1.218:7000/api/healthcare/getfinal");
        if (data) {
            await AsyncStorage.setItem('healthcare', JSON.stringify(data));
            let healthCare = JSON.parse(
                await AsyncStorage.getItem('healthcare'));
            let { listRecorded } = healthCare;
            let lastRecorded = JSON.parse(
                await AsyncStorage.getItem('lastRecorded'));
            let { BMI } = lastRecorded;
            this.setState(state => {
                return {
                    listRecorded: listRecorded,
                    lastRecorded: BMI,
                }
            });
            this.setState(state => {
                return {
                    lastDate: this.state.listRecorded[this.state.listRecorded.length - 1].Date
                }
            });
            console.log("xong");
        }else{
            console.log("co loi");
        }
    }
    componentWillUnmount(){
        console.log("unmout");
    }
    EditBtnClicked() {
        let { lastRecorded } = this.state;
        let { navigation } = this.props;
        this.props.navigation.replace('Update');
        navigation.navigate("Update", { lastRecorded: lastRecorded });
    }
    async RefreshBtnClicked() {
    }
    render() {
        let { lastRecorded, listRecorded, lastDate } = this.state;
        // console.log(lastRecorded);
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
                    onClicked={this.EditBtnClicked}
                />
                <Button5
                    icon={StatisticsIcon}
                    name={"Lịch sử"}
                    onClicked={() => navigation.navigate("Statistics", { listRecorded: listRecorded })}
                />
            </View>
            <View style={styles.RefreshBtnArea}>
                <Button5
                    icon={RefreshIcon}
                    name={"Làm mới"}
                    onClicked={this.RefreshBtnClicked}
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