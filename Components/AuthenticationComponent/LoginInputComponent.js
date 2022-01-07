import React, { Component } from "react";
import { View, StyleSheet,Alert} from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import AsyncStorage  from '@react-native-async-storage/async-storage';

import RegisterIcon from "../../img/register.png";
import LoginIcon from "../../img/login.png";
import Button5 from "../../Components/ButtonCom/Button5";

class LoginInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.LoginBtnonPressed = this.LoginBtnonPressed.bind(this);
        this.RegisterBtnonPressed = this.RegisterBtnonPressed.bind(this);
    }
    async LoginBtnonPressed() {
        const {navigation} = this.props;
        const {data} = await axios.
            post(`${global.urladdress}/api/user/login`,
                { data: this.state });
        if(!data.error){
            await AsyncStorage.setItem('token',data);
            axios.defaults.headers.common['Authorization'] = data;
            navigation.navigate("BlankScreen2");
        }else{
            Alert.alert("login failed",data.error[0]);
        }
    }
    RegisterBtnonPressed(){
        const {navigation} = this.props;
        navigation.navigate("register");
    }
    async componentDidMount(){
        const {navigation} = this.props;
        if(await AsyncStorage.getItem('token')){
            navigation.navigate("MainNavigator");
        }
    }
    render() {
        return <View style={styles.container}>
            <View style={styles.textInput}>
                <Input
                    placeholder="Username"
                    label="Tên đăng nhập"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value => this.setState({ username: value })}
                />
                <Input
                    secureTextEntry={true}
                    placeholder="Password"
                    label="Mật khẩu"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={value => this.setState({ password: value })}
                />
            </View>
            <View style={styles.buttonArea}>
                <Button5 
                    icon={LoginIcon}
                    name={"Đăng nhập"}
                    onClicked={this.LoginBtnonPressed}
                />
                <Button5 
                    icon={RegisterIcon}
                    name={"Đăng ký"}
                    onClicked={this.RegisterBtnonPressed}
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
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
});