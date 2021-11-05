import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Google from "../../img/google.png";
import LoginInputComponent from "../../Components/AuthenticationComponent/LoginInputComponent";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <View style={styles.container}>
            <View style={styles.logoArea}>
                <Image source={Google} style={{ width: 260, height: 90 }} />
            </View>
            <LoginInputComponent></LoginInputComponent>
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
    }
});
export default LoginScreen;