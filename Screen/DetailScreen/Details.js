import React,{Component} from 'react';
import { Button, Text, View ,StyleSheet, FlatList} from 'react-native';

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
            ListItem:[
                {id:1,keyword:"Footstep",name:"Bước chân",picture:FootStep,numberal:60},
                {id:2,keyword:"SleepingTime",name:"Giấc ngủ",picture:Sleeping,numberal:5},
                {id:3,keyword:"BMInumberal",name:"BMI",picture:Bmi,numberal:22},
                {id:4,keyword:"BloodPressure",name:"Huyết áp",picture:BloodPressure,numberal:120},
                {id:5,keyword:"HeartBeat",name:"Tim mạch",picture:HeartBeat,numberal:90}
            ]
        }
    }
    render(){
        const {ListItem} = this.state;
        const {navigation} = this.props;
        return <FlatList data={ListItem}
                         renderItem={({item})=><Item item={item} 
                                    onPressed={() => navigation.navigate(item.keyword)}/>}
                         keyExtractor={item=>`${item.id}`}
                         contentContainerStyle={{paddingHorizontal:16,
                                                 paddingTop:80,
                                                 backgroundColor:"#F2F2F2"}}
        />;
    }
}

export default DetailScreen;