import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, TextInput, ScrollView, TouchableOpacity, InteractionManager } from 'react-native';

const Avatar = {uri:"https://i.imgur.com/PNV9Tr8.png"};

class Message extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {item} = this.props;
        return<View style={item.senderId===1?styles.containerSender:styles.containerReceiver}>    
            <View style={styles.AvatarArea}>
                <Image source={Avatar} style={{width:40,height:40,borderRadius:20}}/>
            </View>
            <View style={item.senderId===1?styles.TextAreaCurrent:styles.TextAreaPartner}>
                <Text style={{fontSize:15}}>{
                    item.Message
                }</Text>
            </View>
        </View>
    }
}
export default Message;

const styles = StyleSheet.create({
    containerSender:{
        paddingVertical:15,
        flexDirection:"row",
    },
    containerReceiver:{
        paddingVertical:15,
        flexDirection:"row-reverse",
    },
    AvatarArea:{
        paddingHorizontal:10,
        justifyContent:"center",
    },
    TextAreaCurrent:{
        maxWidth:'60%',
        alignContent:"center",
        justifyContent:"center",
        padding: 14,
        borderRadius:18,
        backgroundColor:"gray",
    },
    TextAreaPartner:{
        maxWidth:'60%',
        alignContent:"center",
        justifyContent:"center",
        padding: 14,
        borderRadius:18,
        backgroundColor:"blue",
    },
})