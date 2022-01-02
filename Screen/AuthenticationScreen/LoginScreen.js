import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainLogo from "../../img/mainlogo.png";
import LoginInputComponent from "../../Components/AuthenticationComponent/LoginInputComponent";


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.SocialIconTouched = this.SocialIconTouched.bind(this);
    }
    SocialIconTouched(){
        Alert.alert("Đang phát triển.");
    }
    render() {
        const { navigation, route } = this.props;
        return <View style={styles.container}>
            <View style={styles.logoArea}>
                <View>
                    <Image source={MainLogo} style={{ width: 80, height: 80 }} />
                </View>
                <View>
                    <Text style={{
                        fontSize: 26,
                        fontFamily: "monospace",
                        margin: 10,
                        fontWeight: "bold"
                    }}>
                        {"Media Care"}</Text>
                </View>
            </View>
            <LoginInputComponent navigation={navigation}></LoginInputComponent>
            <View style={styles.SocialIcon}>
                <TouchableOpacity onPress={this.SocialIconTouched}>
                    <View style={styles.icon}>
                        <Ionicons
                            name="logo-facebook"
                            size={45}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.SocialIconTouched}>
                    <View style={styles.icon}>
                        <Ionicons
                            name="logo-instagram"
                            size={45}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.SocialIconTouched}>
                    <View style={styles.icon}>
                        <Ionicons
                            name="logo-google"
                            size={45}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.SocialIconTouched}>
                    <View style={styles.icon}>
                        <Text style={{ fontSize: 20 }}
                        >About.</Text>
                    </View>
                </TouchableOpacity>
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
        marginTop:100,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 80,
    },
    SocialIcon: {
        height: "20%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",

    },
    icon: {
        margin: 5,
    }
});
export default LoginScreen;