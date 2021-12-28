import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class NumeralBox5 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, icon } = this.props;
        return <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Image
                        source={icon}
                        style={styles.icon} />
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:15}}>{value}</Text>
                </View>
            </View>
        </TouchableOpacity>
            ;
    }
}
export default NumeralBox5;

const styles = StyleSheet.create({
    container: {
        width: ScreenWidth*42/100,
        padding: 15,
        
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:4,
        borderColor: "gray",
        borderWidth: 2,
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 0.9, 
        shadowOffset: { width: 0, height: 0 }
    },
    icon:{
        width: ScreenWidth*15/100,
        height: ScreenWidth*15/100,
    }
});
