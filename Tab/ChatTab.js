import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ChatBox from '../Screen/ChatScreen/ChatBox';
import ListMessage from '../Screen/ChatScreen/ListMessage';
const Stack = createNativeStackNavigator();
class ChatTab extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount(){
        let message = await axios.get("http://192.168.1.218:7000/api/message/get");
        await AsyncStorage.setItem('chatBoxList',JSON.stringify(message.data));
    }
    render() {
        const { navigation, route } = this.props;
        return (
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerShown: route.name=="ListChatBox"?false:true,
                    
                })
                }
                initialRouteName="ListChatBox"
            >
                <Stack.Screen name="ListChatBox" component={ListMessage} />
                <Stack.Screen name="ChatBox" component={ChatBox} />
            </Stack.Navigator>

        );
    }
}


export default ChatTab;