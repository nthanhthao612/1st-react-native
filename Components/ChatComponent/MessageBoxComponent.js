import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity } from 'react-native';


class MessageBoxComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item, onPressed } = this.props;
        return (<TouchableOpacity onPress={onPressed}>
            <View style={styles.container} >
                <View style={styles.AvatarArea}>
                    <Image source={{uri:item.partner.avatar}}
                        style={{ width: 50, height: 50 }} />
                </View>
                <View style={styles.LastMessage}>
                    <Text style={{ fontSize: 14,fontWeight:"bold" }}
                        numberOfLines={1}>
                        {`${item.partner.lastName} ${item.partner.firstName}`}
                    </Text>
                    <Text style={{ fontSize: 14 }}
                        numberOfLines={1}>
                        {item.Conversation[item.Conversation.length - 1].content}
                    </Text>
                </View>
                <View style={styles.LastTime}>
                    <Text style={{ fontSize: 10 }}
                        numberOfLines={1}>
                        {item.Conversation[item.Conversation.length - 1].time}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        elevation: 1,
        alignItems: "center",
        marginBottom: 15,
        width: '100%',
        height: 75,
        backgroundColor: "blue",
        borderRadius: 18
    },
    AvatarArea: {
        flexGrow: 1,
        alignItems:"center"
    },
    LastMessage: {
        paddingLeft:12,
        flexGrow: 26,
        overflow: 'hidden',
        maxWidth: "50%"
    },
    LastTime: {
        flexGrow: 1,
        alignItems:"center"
    }
});

export default MessageBoxComponent;