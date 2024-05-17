import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TaskListItem({ task }) {
    return (
        // task.id = /details
        <Link href={`/${task.id}`} asChild>
            <Pressable style={styles.container}>
                <Text style={styles.text}>{task.description}</Text>

                <AntDesign name="close" size={16} color="grey" />
            </Pressable>
        </Link>
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