import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import { Input } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

import NumeralBox5 from "../../../Components/NumeralCom/NumeralBox5";
import HeightIcon from "../../../img/height.png";
import WeightIcon from "../../../img/weight.png";
import Button5 from "../../../Components/ButtonCom/Button5";
import CheckedIcon from "../../../img/checked.png";

class UpdateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            healthcareID: "",
            reload: true,
            lastRecorded: {}
        }
        this.DoneButtonPressed = this.DoneButtonPressed.bind(this);
    }
    async componentDidMount() {
        let healthcareID = await AsyncStorage.getItem('healthcareID');
        let { lastRecorded } = this.props.route.params;
        this.setState(state => {
            return {
                healthcareID: healthcareID,
                lastRecorded: lastRecorded,
            }
        });
    }
    async DoneButtonPressed() {
        let { navigation } = this.props;
        this.setState(state => {
            return {
                lastRecorded: {
                    ...this.state.lastRecorded,
                    height: this.state.height,
                    weight: this.state.weight
                }
            }
        });
        let tempObject = await JSON.parse(AsyncStorage.getItem('healthcare'));
        // await AsyncStorage.removeItem('healthcare');
        let last = tempObject.listRecorded[tempObject.listRecorded.length - 1];
        tempObject.listRecorded[tempObject.listRecorded.length - 1] = {
            ...last,
            BMI: this.state.lastRecorded
        }

        // console.log(tempObject.listRecorded[tempObject.listRecorded.length - 1]);
        await AsyncStorage.setItem('healthcare', JSON.stringify(tempObject));
        // console.log(await AsyncStorage.getItem('healthcare'));
        // let result = await axios.post("http://192.168.1.218:7000/api/healthcare/udate",
        //     { data: JSON.parse(await AsyncStorage.getItem('healthcare')) });
        navigation.navigate('Overview');
        
    }
    render() {
        let { lastRecorded } = this.state;
        return <View style={styles.container}>
            <View style={styles.height_weight}>
                <NumeralBox5
                    icon={HeightIcon}
                    value={lastRecorded.height}
                />
                <NumeralBox5
                    icon={WeightIcon}
                    value={lastRecorded.weight}
                />
            </View>
            <View style={styles.inputArea}>
                <Input
                    placeholder="Đơn vị: KG"
                    label="Chiều cao"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value => this.setState({ height: parseInt(value) })}
                />
                <Input
                    placeholder="Đơn vị: CM"
                    label="Cân nặng"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value => this.setState({ weight: parseInt(value) })}
                />
            </View>
            <Button5
                icon={CheckedIcon}
                name={"Hoàn tất"}
                onClicked={this.DoneButtonPressed}
            />
        </View>
    }
}
export default UpdateScreen;

let styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
        alignItems: "center"
    },
    inputArea: {
        marginTop: 20,
        width: "100%",
        alignItems: "center"
    },
    height_weight: {
        marginTop: 30,
        flexDirection: "column",
        alignItems: "center",
    },
});