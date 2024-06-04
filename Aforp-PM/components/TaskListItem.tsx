import React from 'react';
import {View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Task } from '../models/Task';
import { useRealm } from '@realm/react';

export default function TaskListItem({ task }: {task: Task}) {
    const realm = useRealm();

    const deleteTask = () => {
        realm.write(() => {
            realm.delete(task)
        })
    };

    return (
        // task.id = /details
        <Link href={`/${task._id}`} asChild>
            <Pressable style={styles.container}>
                <Text style={styles.text}>{task.description}</Text>

                <AntDesign onPress={deleteTask} name="close" size={16} color="grey" />
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