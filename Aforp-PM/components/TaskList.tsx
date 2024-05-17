import React from 'react';
import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';


export default function TaskList() {
    const [tasks, setTasks] = useState([
        { description: 'Faire la maquette'},
        { description: 'Faire la fonction create task'},
    ]);

    const [newTask, setNewTask] = useState('');

    const createTask = () => {
        // console.warn('Create: ', newTask);
        setTasks([...tasks, { description: newTask }]);
        
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
            <Button title="add task" onPress={createTask} />
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

