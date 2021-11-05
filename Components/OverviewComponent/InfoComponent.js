import React, { Component } from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

class InfoComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {currentUser} = this.props;
        return <View style={styles.container}>
            <Text style={styles.infoText}>{`Tên: ${currentUser.lastName} ${currentUser.firstName}`}</Text>
            <Text style={styles.infoText}>{`Ngày sinh: ${currentUser.DoB}`}</Text>
            <Text style={styles.infoText}>{`Giới tính: ${currentUser.gender}`}</Text>
            <Text style={styles.infoText}>{`Thể trạng: Bình Thường`}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:"yellow",
        paddingHorizontal:20,
        flexGrow:4,
        justifyContent:"center",
        borderRadius:12
    },
    infoText:{
        margin:10,
        fontWeight: "bold",
        fontSize: 18
    }
}); 

export default InfoComponent;