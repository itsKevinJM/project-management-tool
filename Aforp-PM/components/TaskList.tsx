import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import TaskListItem from './TaskListItem';

interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
    priority: string;
    teamMembers: string[];
}

interface TaskListProps {
    tasks: Task[];
    status: string;
    onChangeTaskStatus: (task: Task, newStatus: string) => void;
    onSelectTask: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status, onChangeTaskStatus, onSelectTask }) => {
    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <FlatList
            data={filteredTasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onSelectTask(item)}>
                    <TaskListItem task={item} onChangeTaskStatus={onChangeTaskStatus} />
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    taskItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default TaskList;
