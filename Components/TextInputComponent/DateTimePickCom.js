import React, {useState,useEffect} from 'react';
import {View, Button, Platform,TouchableOpacity,TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DateTimePickCom(props) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        sendData(selectedDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const sendData = (date) =>{
        let Data = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        props.onChangeDate(Data);
    }
    return (
        <TouchableOpacity>
            <View>
                <View>
                    <Button onPress={showDatepicker} title="Ngày sinh" />
                </View>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <View style={{ marginTop: 15, alignItems: "center" }}>
                    <TextInput
                        value={`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                        editable={false}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default DateTimePickCom;