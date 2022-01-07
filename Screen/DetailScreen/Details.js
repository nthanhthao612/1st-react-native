import React, { Component } from 'react';
import { FlatList, Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


import Item from "../../Components/DetailComponent/Item";

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastHealthCareID: "",
            ListItem: {},
        }
    }
    async componentDidMount() {
        let { data } = await axios.get("http://192.168.1.218:7000/api/healthcare/getfinal");
        await AsyncStorage.setItem('healthcare',JSON.stringify(data));
        data = JSON.parse(JSON.stringify(data));
        let { _id, listRecorded } = data;
        await AsyncStorage.setItem('healthcareID', _id);
        let lastRecorded = listRecorded.pop();
        this.setState({ lastHealthCareID: lastRecorded._id });
        await AsyncStorage.setItem('lastRecored',JSON.stringify(lastRecorded));
        delete lastRecorded._id;
        delete lastRecorded.Date;
        this.setState(state => {
            return {
                ListItem: lastRecorded
            }
        });
    }
    onPressed(keyword) {
        const { navigation } = this.props;
        this.props.navigation.replace(keyword);
        navigation.navigate(keyword);
    }
    render() {
        const ListItem = this.state.ListItem ? Object.values(this.state.ListItem) : []
        const { navigation } = this.props;
        return <View>
            <FlatList data={ListItem}
                renderItem={({ item }) => <Item item={item}
                    onPressed={() => navigation.navigate(item.keyword)} />}
                keyExtractor={item => item.activityId}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 80,
                    backgroundColor: "#F2F2F2"
                }}
            />
        </View>;
    }
}
export default DetailScreen;