import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements'

import Message from '../../Components/ChatComponent/MessageComponent';


class ChatBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { route } = this.props;
        const { Conversation,partner} = route.params.item;
        return <View style={styles.container}>
            <FlatList
                // inverted
                ref="flatList"
                onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
                data={Conversation}
                renderItem={({item})=><Message item={item} partner={partner}/>}
                keyExtractor={item => item._id}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            />
            <View style={styles.inputArea}>
                <View style={{ flexGrow: 50 }}>
                    <Input numberOfLines={1} multiline={true} style={styles.textInput, { padding: 5 }} />
                </View>
                <View style={{ flexGrow: 1 }}>
                    <Button title={"send"} />
                </View>
            </View>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    inputArea: {
        paddingHorizontal: 16,
        width: "100%",
        flexDirection: "row",
    },
    textInput: {
        borderWidth: 3,
        borderRadius: 10,
        opacity: 0.5,
    }
})

export default ChatBox;



