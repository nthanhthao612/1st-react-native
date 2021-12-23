import React, { Component } from "react";
import { View, StyleSheet} from "react-native";

import RegisterInputComponent from "../../Components/AuthenticationComponent/RegisterInputComponent";

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigation,route} = this.props;
        return <View style={styles.container}>
            <RegisterInputComponent navigation={navigation}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    logoArea: {
        paddingTop: 50,
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    }
});
export default RegisterScreen;