import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

class LoginInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.onPressed = this.onPressed.bind(this);
    }
    async onPressed() {
        const data = await axios.
            post("http://192.168.1.218:7000/api/login",
                { data: this.state });
    }
    render() {
        return <View style={styles.container}>
            <View style={styles.textInput}>
                <Input
                    placeholder="Username"
                    label="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value => this.setState({ username: value })}
                />
                <Input
                    secureTextEntry={true}
                    placeholder="Password"
                    label="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={value => this.setState({ password: value })}
                />
            </View>
            <View style={styles.buttonArea}>
                <Button
                    title="Sign in"
                    buttonStyle={styles.buttonInput}
                    onPress={this.onPressed}
                />
                <Button
                    title="Register"
                    buttonStyle={styles.buttonInput}
                />
            </View>
        </View>
    }
}
export default LoginInputComponent;

const styles = StyleSheet.create({
    container: {
        flexGrow: 4,
    },
    textInput: {
        width: 250
    },
    buttonInput: {
        width: 100,
        height: 50,
        marginHorizontal: 10
    },
    buttonArea: {
        flexDirection: "row"
    }
});