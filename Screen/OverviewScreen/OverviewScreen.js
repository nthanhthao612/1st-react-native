import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import OverviewInfo from "../../Components/OverviewComponent/OverviewInfoComponent";
import { Switch } from 'react-native-elements/dist/switch/switch';

function DisplayQRCode(props) {
    return <QRCode
        value="https://www.facebook.com/Killer.use/"
        logoBackgroundColor='transparent'
        size={ScreenWidth*2/3}
    />
}
function DisplayBarCode(props) {
    return <Barcode
        value="https://www.facebook.com/Killer.use/"
        logoBackgroundColor='transparent'
        maxWidth={ScreenWidth*4/5}
        height={ScreenWidth*3/7}
    />
}

class OverviewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            isQRCode: true
        }
        this.switchButtonChange = this.switchButtonChange.bind(this)
    }
    async componentDidMount() {
        let userData = await AsyncStorage.getItem('userData');
        if (!userData) {
            let data = await axios.get("http://192.168.1.218:7000/api/user/info");
            await AsyncStorage.setItem('userData', JSON.stringify(data.data));
            global.currentUser = data.data;
            this.setState(state => {
                return {
                    currentUser: data.data
                }
            })
        } else {
            this.setState(state => {
                return {
                    currentUser: JSON.parse(userData)
                }
            })
        }

    }
    switchButtonChange() {
        this.setState({
            isQRCode: !this.state.isQRCode
        })
    }
    render() {
        const { currentUser } = this.state;
        return <View style={styles.container}>
            <View style={styles.switchButton}>
                <Text>{this.state.isQRCode ? "QR code" : "BarCode"}</Text>
                <Switch
                    onValueChange={this.switchButtonChange}
                    value={this.state.isQRCode} />

            </View>
            <View style={styles.overviewPicArea}>
                {
                    this.state.isQRCode?<DisplayQRCode/>:<DisplayBarCode/>
                }
            </View>
            <OverviewInfo currentUser={currentUser}></OverviewInfo>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#EFEFEF',
        paddingHorizontal: 15,
    },
    switchButton: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    overviewPicArea: {
        marginTop: 20,
        borderRadius: 50,
        height: '45%',
        width: '90%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#71EA64"
    }
});

export default OverviewScreen;