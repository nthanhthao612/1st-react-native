import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatBox from '../Screen/ChatScreen/ChatBox';
import ListMessage from '../Screen/ChatScreen/ListMessage';
const Stack = createNativeStackNavigator();

class ChatTab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation, route } = this.props;
        return (
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerShown: (route.name === "MainDetails" ? false : true),
                })
                }
            >
                <Stack.Screen name="ListFriend" component={ListMessage} />
                <Stack.Screen name="ChatBox" component={ChatBox} />
            </Stack.Navigator>

        );
    }
}




export default ChatTab;