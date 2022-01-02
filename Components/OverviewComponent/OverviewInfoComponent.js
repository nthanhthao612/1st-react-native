import React, { Component } from 'react';
import {View, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

import InfoComponent from './InfoComponent';
class OverviewInfo extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount(){
        
    }
    render() {
        const {currentUser} = this.props;
        return <View style={styles.container}>
            <View style={styles.avatarArea}>
                <Image source={{uri:currentUser.avatar}} style={styles.avatar}></Image>
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
        width:"90%",
        borderRadius:20
    },
    avatarArea: {
        justifyContent:"center",
        alignItems:"center",
        flexGrow: 2,
        backgroundColor:"lightblue",
        height:"100%",
        borderRadius:12
    },
    avatar: {
        width: ScreenWidth*12/100,
        height: ScreenWidth*12/100,
    }
});
export default OverviewInfo;