import React, {useState} from 'react';
import {View, Button, Platform,TouchableOpacity,Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

function DateTimePickCom() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };
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
                    <Text style={{ fontSize: 15 }}>
                        {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default DateTimePickCom;