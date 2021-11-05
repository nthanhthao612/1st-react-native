import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import ActivityArea from './ActivityArea';

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item,onPressed } = this.props;
        return <TouchableOpacity onPress={onPressed}>
            <View style={styles.container}>
                <Text style={styles.ActivityName}>{item.name}</Text>
                <ActivityArea style={styles.Activity}
                    data={item} />
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        elevation: 1,
        borderColor: "#000",
        flexDirection: "column",
        marginBottom: 15,
        width: '100%',
        height: 100,
        borderRadius: 4,
        shadowColor: "gray",
        shadowRadius: 10,
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 0 }
    },
    ActivityName: {
        flexGrow: 1
    }
});

export default Item;