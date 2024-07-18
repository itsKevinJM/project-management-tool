import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface TaskListItemProps {
    task: Task;
    onChangeTaskStatus: (task: Task, newStatus: string) => void;
}

interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
    priority: string;
    teamMembers: string[];
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task, onChangeTaskStatus }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{task.name}</Text>
            <Text>{task.description}</Text>
            <Text>{task.startDate.toDateString()}</Text>
            <Text>{task.endDate.toDateString()}</Text>
            <Text>Priorité: {task.priority}</Text>
            <Text>Équipe: {task.teamMembers.join(', ')}</Text>
            {task.status === 'Todo' && <Button title="In Progress" onPress={() => onChangeTaskStatus(task, 'In Progress')} />}
            {task.status === 'In Progress' && <Button title="Finished" onPress={() => onChangeTaskStatus(task, 'Finished')} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
    },
    name: {
        fontWeight: 'bold',
    },
});

export default TaskListItem;
