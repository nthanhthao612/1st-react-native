import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
class Button5 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name} = this.props;
        const { onClicked } = this.props;
        return <TouchableOpacity onPress={onClicked}>
            <View style={styles.container}>
                <Text
                    style={{ marginHorizontal: 5, fontWeight:"bold"}}
                >{name}
                </Text>
            </View>
        </TouchableOpacity>
            ;
    }
}
export default Button5;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: ScreenWidth*35/100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "gray",
    }
});