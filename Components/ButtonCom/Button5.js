import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
class Button5 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, icon } = this.props;
        const { onClicked } = this.props;
        return <TouchableOpacity onPress={onClicked}>
            <View style={styles.container}>
                <Image
                    source={icon}
                    style={{ marginHorizontal: 5,width:30,height:30}} />
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
        padding: 10
    }
});