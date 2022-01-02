import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
class OptionCom5 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {name} = this.props;
        const { onClicked } = this.props;
        return <TouchableOpacity onPress={onClicked}>
            <View style={styles.container}>
                <Text
                    style={{ marginHorizontal: 5,
                        paddingLeft:20,
                        fontWeight:"bold"}}
                >{name}
                </Text>
            </View>
        </TouchableOpacity>;
    }
}
export default OptionCom5;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        width: ScreenWidth*85/100,
        borderWidth: 0.3,
        borderRadius: 5,
        padding: 10
    }
});