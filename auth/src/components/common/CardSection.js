import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={style.conrainerStyle}>
        {props.children}
    </View>
);

const style = {
    conrainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
