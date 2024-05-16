import React from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import TaskListItem from './TaskListItem';
import { useState } from 'react';


export default function TaskList() {
    const [tasks, setTasks] = useState([
        { description: 'First task'},
        { description: 'Second task'},
    ]);

    const createTask = () => {
        console.warn('Create');    
    }

    return (
        <View style={{ backgroundColor: '#101112', padding: 10, borderRadius: 5, gap: 5}}>
            <Text 
                style={{ 
                    color: 'white', 
                    fontWeight: 'bold', 
                    fontSize: 20, 
                    marginVertical: 10, 
                }}
            >
                Todo
                </Text>

            {/* The list of tasks */}
            <FlatList 
                data={tasks}
                contentContainerStyle={{ gap: 5 }} 
                renderItem={({ item }) => <TaskListItem task={item} />}
            />


            {/* New task input */}
            <TextInput 
                placeholder="New Task" 
                placeholderTextColor="gray" 
                style={{ 
                    color: 'white', 
                    padding: 15, 
                    backgroundColor: '#1A1A1A',
                    borderRadius: 5, 
                }} 
            />
            <Button title="add task" onPress={createTask} />
        </View>
    );
}