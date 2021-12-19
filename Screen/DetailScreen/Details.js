import React, { Component } from 'react';
import { FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

import Item from "../../Components/DetailComponent/Item";


class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListItem: {},
        }
    }
    async componentDidMount() {
        let { isConnected } = await NetInfo.fetch();
        if (isConnected) {
            const { data } = await axios.
                get("http://192.168.1.218:7000/api/healthcare/getfinal");
            await AsyncStorage.setItem('healthcare', JSON.stringify(data));
        }
        let healthCareInfo = JSON.parse(
            await AsyncStorage.getItem('healthcare')
        );
        let { listRecorded } = healthCareInfo;
        let lastRecorded = listRecorded[listRecorded.length - 1];
        delete lastRecorded._id;
        delete lastRecorded.Date;
        this.setState(state => {
            return {
                ListItem: lastRecorded
            }
        });
        await AsyncStorage.setItem('lastRecorded',
            JSON.stringify(this.state.ListItem));
    }
    render() {
        const data = this.state.ListItem ? Object.values(this.state.ListItem) : []
        const { navigation } = this.props;
        let {lastDate} = this.state;
        return <FlatList data={data}
            renderItem={({ item }) => <Item item={item}
                onPressed={() => navigation.navigate(item.keyword,{lastDate:lastDate})} />}
            keyExtractor={item => item.activityId}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingTop: 80,
                backgroundColor: "#F2F2F2"
            }}
        />;
    }
}
export default DetailScreen;