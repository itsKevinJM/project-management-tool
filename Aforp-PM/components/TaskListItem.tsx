import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TaskListItemProps {
    task: { description: string };
    onPress: (task: { description: string }) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(task)} style={styles.container}>
            <Text style={styles.text}>{task.description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#EDEDED',
        borderRadius: 5,
    },
    text: {
        color: 'black',
    },
});

export default TaskListItem;
