import React from 'react';
import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';
import { useRealm, useQuery } from '@realm/react';
import { Task } from '../models/Task';


export default function TaskList() {
    const realm = useRealm();
    const tasks = useQuery(Task);

    // const [tasks, setTasks] = useState([
    //     { id: '1', description: 'Faire la maquette'},
    //     { id: '2', description: 'Faire la fonction create task'},
    // ]);

    const [newTask, setNewTask] = useState('');

    const createTask = () => {
        // console.warn('Create: ', newTask);
        // setTasks([...tasks, { description: newTask }]);
        realm.write(() => {
            realm.create(Task, {description: newTask, user_id: '123'});
        });
        setNewTask('');
    }; 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo</Text>

            {/* The list of tasks */}
            <FlatList 
                data={tasks}
                contentContainerStyle={{ gap: 5 }} 
                renderItem={({ item }) => <TaskListItem task={item} />}
            />


            {/* New task input */}
            <TextInput 
                value={newTask}
                onChangeText={setNewTask}
                placeholder="Ajouter une tâche" 
                placeholderTextColor="gray" 
                style={styles.input} 
            />
            <Button title="Ajouter une tâche" onPress={createTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : { 
        backgroundColor: 'white', 
        padding: 10, 
        borderRadius: 5,
        gap: 5,
    },
    title: {
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: 20, 
        marginVertical: 10,
    },
    input: {
        color: 'black',
        padding: 15,
        backgroundColor: '#EDEDED', 
        borderRadius: 5,
    },
});

