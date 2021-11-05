import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Avatar = {uri:"https://i.imgur.com/f94KMy4.png"};

import InfoComponent from './InfoComponent';
class OverviewInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {currentUser} = this.props;
        return <View style={styles.container}>
            <View style={styles.avatarArea}>
                <Image source={currentUser.avatar} style={styles.avatar}></Image>
            </View>
            <InfoComponent currentUser={currentUser}></InfoComponent>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
        height:"35%",
        width:"100%",
        borderRadius:20
    },
    avatarArea: {
        justifyContent:"center",
        alignItems:"center",
        flexGrow: 2,
        backgroundColor:"blue",
        height:"100%",
        borderRadius:12
    },
    avatar: {
        width: 80,
        height: 80
    }
});
export default OverviewInfo;