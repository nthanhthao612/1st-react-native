import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class NumeralVerticalBox5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            icon: props.icon
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState(state=>{
            return {
                value: nextProps.value,
                icon: nextProps.icon
            }
        })
    }
    render() {
        const { value, icon } = this.state;
        return <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Image
                        source={icon}
                        style={{
                            width: ScreenWidth * 12 / 100,
                            height: ScreenWidth * 12 / 100
                        }} />
                </View>
                <View>
                    <Text style={{ fontWeight: "bold" }}>{value}</Text>
                </View>
            </View>
        </TouchableOpacity>
            ;
    }
}
export default NumeralVerticalBox5;

const styles = StyleSheet.create({
    container: {
        width: ScreenWidth * 20 / 100,
        borderColor: "red",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
});
