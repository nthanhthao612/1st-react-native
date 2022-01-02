import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button5 from '../../Components/ButtonCom/Button5';
import CalendarIcon from "../../img/calendar.png";
import CalendarBox1 from '../../Components/SettingScreenCom/CalendarBox1';


export default class ListCalendarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            calendar: {}
        }
    }
    async componentDidMount() {
        let userData = await AsyncStorage.getItem('userData');
        let calendar = await AsyncStorage.getItem('calendar');
        this.setState(state => {
            return {
                currentUser: JSON.parse(userData),
                calendar: JSON.parse(calendar),
            }
        });

    }
    render() {
        let { calendar } = this.state;
        let { listDate } = calendar;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={listDate}
                    renderItem={({ item }) => <CalendarBox1 item={item} />}
                    keyExtractor={item => item._id} />
                <View>
                    <Button5
                        icon={CalendarIcon}
                        name={"Đặt lịch"}
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
    BtnArea: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 20
    }
});