import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MessageBoxComponent from '../../Components/ChatComponent/MessageBoxComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const femaleAvatar = { uri: "https://i.imgur.com/PNV9Tr8.png" };
const maleAvatar = { uri: "https://i.imgur.com/f94KMy4.png" };

class ListMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatBoxList: []
        }
    }
    async componentDidMount() {
        let data = JSON.parse(await AsyncStorage.getItem('chatBoxList'));
        this.setState(state => {
            return {
                chatBoxList: data
            }
        });
    }
    render() {
        const { chatBoxList } = this.state;
        const { navigation, route } = this.props;
        return (
            <FlatList data={chatBoxList}
                renderItem={({ item }) => <MessageBoxComponent
                    item={item}
                    onPressed={() => navigation.navigate("ChatBox", { item })} />}
                keyExtractor={item => item._id}
                contentContainerStyle={{
                    flexDirection: "column",
                    paddingHorizontal: 20,
                    paddingTop: 30
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
    }
})

export default ListMessage;