import React, { Component } from "react";
import { View, StyleSheet,Alert} from "react-native";
import { Input, Button } from "react-native-elements";

class TextInputCom5 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {placeholder,label,iconname,value} = this.props;
        return <View>
            <Input
                    placeholder={placeholder}
                    label={label}
                    leftIcon={{ type: 'font-awesome', name: iconname }}
                    onChangeText={value => this.setState({ username: value })}
                />
        </View>
    }
}
export default TextInputCom5;