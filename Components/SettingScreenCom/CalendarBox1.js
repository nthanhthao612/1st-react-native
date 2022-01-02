import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

import Button1 from "../../Components/ButtonCom/Button1";
const ScreenWidth = Dimensions.get("window").width;

class CalendarBox1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onClicked, item } = this.props;
        return <TouchableOpacity onPress={onClicked}>
            <View style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.infoText}>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                marginVertical:3,
                                paddingLeft: 20,
                                fontWeight: "bold"
                            }}
                        >{"Tên Bác sĩ"}
                        </Text>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                marginVertical:3,
                                paddingLeft: 20,
                                fontWeight: "bold"
                            }}
                        >{item.docName}
                        </Text>
                    </View>
                    <View style={styles.infoText}>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                marginVertical:3,
                                paddingLeft: 20,
                                fontWeight: "bold"
                            }}
                        >{"Ngày"}
                        </Text>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                marginVertical:3,
                                paddingLeft: 20,
                                fontWeight: "bold"
                            }}
                        >{item.date}
                        </Text>
                    </View>
                    <View style={styles.infoText}>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                marginVertical:3,
                                paddingLeft: 20,
                                fontWeight: "bold"
                            }}
                        >{"Giờ"}
                        </Text>
                        <Text
                            style={{
                                marginHorizontal: 5,
                                marginVertical:3,
                                paddingLeft: 20,
                                fontWeight: "bold"
                            }}
                        >{item.time}
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonArea}>
                    <Button1
                        name={"Bỏ lịch"}
                    />
                </View>
            </View>
        </TouchableOpacity>;
    }
}
export default CalendarBox1;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: "column",
        // alignItems: "center",
        width: ScreenWidth * 90 / 100,
        borderWidth: 1.5,
        borderRadius: 15,
        padding: 10,
        height: ScreenWidth * 35 / 100,
    },
    info: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    infoText:{
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonArea:{
        marginLeft: 20,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }
});