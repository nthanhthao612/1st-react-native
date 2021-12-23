import React, { Component} from "react";
import { View, StyleSheet, Alert} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Input } from "react-native-elements";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePickCom from "../TextInputComponent/DateTimePickCom";
import RegisterIcon from "../../img/register.png";
import Button5 from "../../Components/ButtonCom/Button5";


class RegisterInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            phonenumber: "",
            gender: "Nam"
        }
    }
    RegisterBtnonPressed() {
        const { navigation } = this.props;
        navigation.navigate("register");
    }
    async componentDidMount() {
        const { navigation } = this.props;
        if (await AsyncStorage.getItem('token')) {
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
                <Input
                    placeholder="Email"
                    label="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-square' }}
                    onChangeText={value => this.setState({ email: value })}
                />
                <Input
                    placeholder="Phone number"
                    label="Số điện thoại"
                    leftIcon={{ type: 'font-awesome', name: 'phone' }}
                    onChangeText={value => this.setState({ phonenumber: value })}
                />
                <Picker
                    selectedValue={this.state.gender}
                    style={{ height: 50, width: 150 }}
                    onValueChange={value => this.setState({ gender: value })}
                >
                    <Picker.Item label="Nam" value="Nam" />
                    <Picker.Item label="Nữ" value="Nữ" />
                </Picker>
                <DateTimePickCom/>
            </View>
            <View style={styles.buttonArea}>
                <Button5
                    icon={RegisterIcon}
                    name={"Đăng ký"}
                    onClicked={() => console.log("none!")}
                />
            </View>
        </View>
    }
}
export default RegisterInputComponent;

const styles = StyleSheet.create({
    container: {
        flexGrow: 4,
        marginTop: 100,
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
