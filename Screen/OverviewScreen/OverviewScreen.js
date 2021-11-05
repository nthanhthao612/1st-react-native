import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import axios from 'axios';

import OverviewInfo from "../../Components/OverviewComponent/OverviewInfoComponent";

class OverviewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}
        }
    }
    async componentDidMount() {
        const { data } = await axios.get("http://192.168.1.218:8080/user?id=1");
        this.setState(state => {
            return {
                currentUser: data[0]
            }
        });
    }
    render() {
        const { currentUser } = this.state;
        return <View style={styles.container}>
            <View style={styles.overviewPicArea}>
                <QRCode
                    value="https://www.facebook.com/Killer.use/"
                    logoBackgroundColor='transparent'
                    size={200}
                />
            </View>
            <OverviewInfo currentUser={currentUser}></OverviewInfo>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:30,
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    overviewPicArea: {
        marginTop: 60,
        borderRadius: 50,
        height: '50%',
        width: '80%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71EA64"
    }
});

export default OverviewScreen;