import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import LogoutIcon from "../../img/logout.png";
import Button5 from "../../Components/ButtonCom/Button5";
import OptionCom5 from '../../Components/SettingScreenCom/OptionCom5';

export default class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}
        }
        this.LogoutButtonOnClicked = this.LogoutButtonOnClicked.bind(this);
    }
    async LogoutButtonOnClicked() {
        let { navigation } = this.props;
        await AsyncStorage.clear();
        navigation.navigate("Authentication");
    }
    async componentDidMount() {
        let userData = await AsyncStorage.getItem('userData');
        this.setState(state => {
            return {
                currentUser: JSON.parse(userData)
            }
        });
        let calendar = await axios.get(`${global.urladdress}/api/calendar/get`);
        await AsyncStorage.setItem('calendar', JSON.stringify(calendar.data));
    }
    render() {
        let { currentUser } = this.state;
        let { navigation } = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.header}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            {`${currentUser.lastName} ${currentUser.firstName}`}</Text>
                    </View>
                    <View style={styles.BtnArea}>
                        <Button5
                            icon={LogoutIcon}
                            name={"Đăng xuất"}
                            onClicked={this.LogoutButtonOnClicked}
                        />
                    </View>
                </View>
                <View>
                    <OptionCom5
                        name={"Thông tin"}
                    />
                    <OptionCom5
                        name={"Lịch khám"}
                        onClicked={() => navigation.navigate("ListCalendarScreen")}
                    />
                    <OptionCom5
                        name={"Cài Đặt"}
                    />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    header: {
        justifyContent: "flex-start",
        alignItems: "center"
    },
    BtnArea: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});