import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import MainLogo from "../../img/mainlogo.png";
import LoginInputComponent from "../../Components/AuthenticationComponent/LoginInputComponent";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigation,route} = this.props;
        return <View style={styles.container}>
            <View style={styles.logoArea}>
                <Image source={MainLogo} style={{ width: 200, height: 200 }} />
            </View>
            <LoginInputComponent navigation={navigation}></LoginInputComponent>
            <View style={{justifyContent:"flex-end",alignItems:"flex-end",flexGrow:1}}>
                <Text>About</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    logoArea: {
        paddingTop: 50,
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 20
    }
});
export default LoginScreen;