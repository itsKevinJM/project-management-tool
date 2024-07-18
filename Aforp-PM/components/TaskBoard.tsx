import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground, Text, Button, ScrollView, Alert } from 'react-native';
import TaskList from './TaskList';
import TaskFormDialog from './TaskFormDialog';
import MenuDropdown from '../scripts/MenuDropdown'; 
import Monfond from '../assets/images/fond-ecran-wallpaper-noir.png';

interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
}

const TaskBoard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { name: 'Maquette', description: 'Faire la maquette', startDate: new Date(), endDate: new Date(), status: 'Todo' },
        { name: 'Create Task', description: 'Faire la fonction create task', startDate: new Date(), endDate: new Date(), status: 'In Progress' },
    ]);

    const [isFormVisible, setIsFormVisible] = useState(false);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const changeTaskStatus = (taskToUpdate: Task, newStatus: string) => {
        setTasks(tasks.map(task => task === taskToUpdate ? { ...task, status: newStatus } : task));
    };

    const handleAddTask = () => {
        setIsFormVisible(true);
    };

    const handleDropdownSelect = (option: string) => {
        Alert.alert(option);
    };

    return (
        <ImageBackground source={Monfond} style={styles.backgroundImage}>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView>
                    <View style={styles.menuContainer}>
                        <MenuDropdown options={['Afficher équipe', 'Afficher état d’avancement']} onSelect={handleDropdownSelect} />
                    </View>
                    <View style={styles.taskListContainer}>
                        <Text style={styles.title}>Todo</Text>
                        <Button title="Ajouter une tâche" onPress={handleAddTask} />
                        <TaskList tasks={tasks} status="Todo" onChangeTaskStatus={changeTaskStatus} />
                    </View>
                    <View style={styles.taskListContainer}>
                        <Text style={styles.title}>In Progress</Text>
                        <TaskList tasks={tasks} status="In Progress" onChangeTaskStatus={changeTaskStatus} />
                    </View>
                    <View style={styles.taskListContainer}>
                        <Text style={styles.title}>Finished</Text>
                        <TaskList tasks={tasks} status="Finished" onChangeTaskStatus={changeTaskStatus} />
                    </View>
                    <TaskFormDialog
                        visible={isFormVisible}
                        onClose={() => setIsFormVisible(false)}
                        onSubmit={addTask}
                    />
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
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
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
