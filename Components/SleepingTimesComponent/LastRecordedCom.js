import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class LastRecordedCom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { data, lastDate} = this.props;
        let {hour,minute,second} = this.props.time;
        return <View style={styles.container}>
            <View style={styles.numeral}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                    {`${hour} giờ ${minute} phút ${second} giây`}
                </Text>
                <Text style={{ fontSize: 15 }}>{data.rate}</Text>
                <Text style={{ fontSize: 10 }}>{lastDate}</Text>
            </View>
        </View>
    }
}

export default LastRecordedCom;

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        height: "40%",
        width: "70%",
        borderColor: "red",
        borderWidth: 2,
        borderRadius: ScreenHeight*50/100,
    },
    numeral: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    }
})