import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, FlatList, Image } from 'react-native';

class Numberal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {data} = this.props;
        if(data.name === 'Tim mạch'){
            return <View style={styles.container}>
                <Text style={styles.numberalInside}>{`${data.numberal} BPM`}</Text>
            </View>
        }
        else if(data.name === 'Bước chân'){
            return <View style={styles.container}>
                <Text style={styles.numberalInside}>{`${data.numberal}/6000 bước`}</Text>
            </View>
        }
        else if(data.name === 'Huyết áp'){
            return <View style={styles.container}>
                <Text style={styles.numberalInside}>{`${data.numberal}/70 mmHg`}</Text>
            </View>
        }
        else if(data.name === 'BMI'){
            return <View style={styles.container}>
                <Text style={styles.numberalInside}>{`${data.numberal}`}</Text>
            </View>
        }
        else{
            return <View style={styles.container}>
                <Text style={styles.numberalInside}>{`${data.numberal} Giờ`}</Text>
            </View>
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        alignItems:"center"
    },
    numberalInside:{
        fontWeight: "bold"
    }
});
export default Numberal;