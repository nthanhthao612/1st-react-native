import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

class NumeralVerticalBox1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, name } = this.props;
        return <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Text>{name}</Text>
                </View>
                <View>
                    <Text style={{fontWeight:"bold"}}>{value}</Text>
                </View>
            </View>
        </TouchableOpacity>
            ;
    }
}
export default NumeralVerticalBox1;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: ScreenWidth * 20 / 100,
        borderColor: "red",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
});
