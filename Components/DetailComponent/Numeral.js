import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

class numeral extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return <View style={styles.container}>
            <Text style={styles.numeralInside}>{`${data.numeral} ${data.unit}`}</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        alignItems: "center"
    },
    numeralInside: {
        fontWeight: "bold"
    }
});
export default numeral;