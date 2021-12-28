import React, { Component } from 'react';
import { FlatList, Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Item from "../../Components/DetailComponent/Item";

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastHealthCareID:"",
            ListItem: {},
            reload: false,
        }
    }
    async componentDidMount() {
        let healthCareInfo = JSON.parse(
            await AsyncStorage.getItem('healthcare'));
        let { listRecorded } = healthCareInfo;
        if (listRecorded.length != 0) {
            let lastRecorded = listRecorded[listRecorded.length - 1];
            await AsyncStorage.setItem('healthcareID',healthCareInfo._id);
            delete lastRecorded._id;
            delete lastRecorded.Date;
            this.setState(state => {
                return {
                    ListItem: lastRecorded
                }
            });
            if(lastRecorded.BMI.height == 0 && lastRecorded.BMI.weight ==0){
                Alert.alert("Chưa có dữ liệu","Dữ liệu mặc định được khởi tạo!");
            }
            await AsyncStorage.setItem('lastRecorded',
                JSON.stringify(this.state.ListItem));
        }
    }
    onPressed(keyword){
        const { navigation } = this.props;
        this.props.navigation.replace(keyword);
        navigation.navigate(keyword);
    }
    render() {
        const data = this.state.ListItem ? Object.values(this.state.ListItem) : []
        const { navigation } = this.props;
        return <View>
            <FlatList data={data}
                renderItem={({ item }) => <Item item={item}
                    onPressed={()=>navigation.navigate(item.keyword)} />}
                keyExtractor={item => item.activityId}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 80,
                    backgroundColor: "#F2F2F2"
                }}
            />
        </View>
            ;
    }
}
export default DetailScreen;