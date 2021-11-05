import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MessageBoxComponent from '../../Components/ChatComponent/MessageBoxComponent';
import shortid from 'shortid';

const femaleAvatar = { uri: "https://i.imgur.com/PNV9Tr8.png" };
const maleAvatar = { uri: "https://i.imgur.com/f94KMy4.png" };

class ListMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList:[]
        }
    }
    async componentDidMount(){
        const {data} = await axios.get("http://192.168.1.218:8080/messageList");
        this.setState(state=>{
            return{
                messageList:data
            }
        });
    }
    render() {
        const { messageList } = this.state;
        const { navigation, route } = this.props;
        return (
            <FlatList data={messageList}
                renderItem={({ item }) => <MessageBoxComponent
                    item={item}
                    onPressed={() => navigation.navigate("ChatBox", { item })} />}
                keyExtractor={item => `${item.messageId}`}
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