import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image } from 'react-native';

class numeral extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {data} = this.props;
        if(data.name === 'Tim mạch'){
            return <View style={styles.container}>
                <Text style={styles.numeralInside}>{`${data.numeral} BPM`}</Text>
            </View>
        }
        else if(data.name === 'Bước chân'){
            return <View style={styles.container}>
                <Text style={styles.numeralInside}>{`${data.numeral}/6000 bước`}</Text>
            </View>
        }
        else if(data.name === 'Huyết áp'){
            return <View style={styles.container}>
                <Text style={styles.numeralInside}>{`${data.numeral}/70 mmHg`}</Text>
            </View>
        }
        else if(data.name === 'BMI'){
            return <View style={styles.container}>
                <Text style={styles.numeralInside}>{`${data.numeral}`}</Text>
            </View>
        }
        else{
            return <View style={styles.container}>
                <Text style={styles.numeralInside}>{`${data.numeral} Giờ`}</Text>
            </View>
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        alignItems:"center"
    },
    numeralInside:{
        fontWeight: "bold"
    }
});
export default numeral;