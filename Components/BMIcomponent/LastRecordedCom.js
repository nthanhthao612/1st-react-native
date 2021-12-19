import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

class LastRecordedCom extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {data} = this.props;
        let {lastDate} = this.props;
        return <View style={styles.container}>
            <View style={styles.numberal}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>{data.numeral}</Text>
                <Text style={{fontSize:15}}>{data.rate}</Text>
                <Text style={{fontSize:10}}>{lastDate}</Text>
            </View>
        </View>
    }
}

export default LastRecordedCom;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: "30%",
        width: "70%",
        borderColor: "red",
        borderWidth: 2,
    },
    numberal: {
        height:"100%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
    }
})