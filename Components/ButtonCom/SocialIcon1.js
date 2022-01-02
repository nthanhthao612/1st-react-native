import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { Dimensions } from 'react-native';

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
class SocialIcon1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onClicked,icon } = this.props;
        return <TouchableOpacity onPress={onClicked}>
            <View style={styles.container}>
                <Image
                    source={icon}
                />
            </View>
        </TouchableOpacity>
            ;
    }
}
export default SocialIcon1;

const styles = StyleSheet.create({
    container: {
        // marginVertical: 20,
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center",
        // width: ScreenWidth*10/100,
        // padding: 10,
    }
});