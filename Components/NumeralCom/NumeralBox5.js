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
                        style={{ width: 50, height: 50 }} />
                </View>
                <View>
                    <Text>{value}</Text>
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
        borderColor: "red",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
});
