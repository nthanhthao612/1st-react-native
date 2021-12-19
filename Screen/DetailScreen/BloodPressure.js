import React,{Component} from 'react';
import { Button, Text, View ,StyleSheet} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class BloodPressure extends Component{
    constructor(props){
        super(props);
        this.state = {
            bloodPressure:{}
        }
    }
    async componentDidMount(){
        let healthCare = JSON.parse(
            await AsyncStorage.getItem('healthcare'));
        let {listRecorded} = healthCare;
        let lastRecorded = JSON.parse(
            await AsyncStorage.getItem('lastRecorded'));
        let {bloodPressure} = lastRecorded;
        this.setState(state=>{
            return {
                bloodPressure:bloodPressure
            }
        })
    }
    render(){
        console.log(this.state.bloodPressure);
        return <View style={styles.container}>
            <View style={styles.lastRecorded}>

            </View>
    </View>
    }
}

export default BloodPressure;
const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        alignItems:"center",
        // justifyContent:"center",
        height: "100%",
    },
    lastRecorded:{
        marginTop: 30,
        height:"20%",
        width: "94%",
        borderColor:"red",
        borderWidth: 2,
    }
})