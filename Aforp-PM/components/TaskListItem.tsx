import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TaskListItem({ task }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task.description}</Text>

            <AntDesign name="close" size={16} color="grey" />
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        padding: 16,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: 'black',
        fontSize: 14,
    },
})