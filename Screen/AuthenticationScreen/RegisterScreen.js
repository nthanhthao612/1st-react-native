import React, { Component } from "react";
import { View, StyleSheet,ScrollView} from "react-native";

import RegisterInputComponent from "../../Components/AuthenticationComponent/RegisterInputComponent";

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {navigation,route} = this.props;
        return <ScrollView contentContainerStyle={styles.container}>
            <RegisterInputComponent navigation={navigation}/>
        </ScrollView>
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