import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground, Text,ScrollView } from 'react-native';
import TaskList from './TaskList';
import MenuDropdown from '../scripts/MenuDropdown'; // Assurez-vous que ce chemin est correct
import Monfond from '../assets/images/fond-ecran-wallpaper-noir.png';

interface Task {
    description: string;
    status: string;
}

const TaskBoard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { description: 'Faire la maquette', status: 'Todo' },
        { description: 'Faire la fonction create task', status: 'In Progress' },
    ]);

    const addTask = (description: string) => {
        setTasks([...tasks, { description, status: 'Todo' }]);
    };

    const changeTaskStatus = (taskToUpdate: Task, newStatus: string) => {
        setTasks(tasks.map(task => task === taskToUpdate ? { ...task, status: newStatus } : task));
    };

    return (
        <ImageBackground source={Monfond} style={styles.backgroundImage}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView style={styles.menuContainer}>
                    <MenuDropdown addTask={addTask} />
                </ScrollView>
                <ScrollView style={styles.taskListContainer}>
                    <Text style={styles.title}>Todo</Text>
                    <TaskList tasks={tasks} status="Todo" onChangeTaskStatus={changeTaskStatus} />
                </ScrollView>
                <ScrollView style={styles.taskListContainer}>
                    <Text style={styles.title}>In Progress</Text>
                    <TaskList tasks={tasks} status="In Progress" onChangeTaskStatus={changeTaskStatus} />
                </ScrollView>
                <ScrollView style={styles.taskListContainer}>
                    <Text style={styles.title}>Finished</Text>
                    <TaskList tasks={tasks} status="Finished" onChangeTaskStatus={changeTaskStatus} />
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    safeArea: {
        flex: 1,
        padding: 10,
    },
    menuContainer: {
        padding: 10,
    },
    taskListContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        marginVertical: 5,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
});

export default TaskBoard;
