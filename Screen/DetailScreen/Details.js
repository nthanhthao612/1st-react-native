import React,{Component} from 'react';
import {FlatList,View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import BloodPressure from "../../img/blood-pressure.png";
import Bmi from "../../img/bmi.png";
import HeartBeat from "../../img/heartbeat.png";
import Sleeping from "../../img/sleeping.png";
import FootStep from "../../img/footstep.png";


import Item from "../../Components/DetailComponent/Item";

class DetailScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            ListItem:{},
            Date:""
        }
    }
    async componentDidMount(){
        const {data} = await axios.
            get("http://192.168.1.218:7000/api/healthcare/getfinal");
        await AsyncStorage.setItem('healthCare',JSON.stringify(data));
        delete data._id;
        this.setState(state=>{
            return {
                Date:data.Date
            }
        });
        delete data._id;
        delete data.Date;
        this.setState(state=>{
            return {
                ListItem:data
            }
        });
    }
    render(){
        const {ListItem} = this.state;
        const {navigation} = this.props;
        return <FlatList data={Object.keys(ListItem)}
                         renderItem={({item})=><Item item={ListItem[item]} 
                                    onPressed={() => navigation.navigate(item.keyword)}/>}
                         keyExtractor={item=>item.keyword}
                         contentContainerStyle={{paddingHorizontal:16,
                                                 paddingTop:80,
                                                 backgroundColor:"#F2F2F2"}}
        />;
        return <View>

        </View>
    }
}

export default DetailScreen;