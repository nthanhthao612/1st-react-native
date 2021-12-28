import React, { Component } from "react";
import { View, StyleSheet,Text} from "react-native";

class ErrorCom1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {item} = this.props;
        return<View style={styles.container}>
            <Text style={{color:"red"}}>{item}</Text>
        </View>
    }
}
export default ErrorCom1;
let styles = StyleSheet.create({
    container:{
        maxWidth: "80%",
        justifyContent:"center",
        alignItems: "center"
    }
});