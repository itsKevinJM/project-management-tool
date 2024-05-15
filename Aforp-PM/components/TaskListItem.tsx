import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TaskListItem() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>First task</Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        padding: 10,
        margin: 10,
    },
    text: {
        color: 'white',
    },
})