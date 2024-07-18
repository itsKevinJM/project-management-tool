import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import TaskListItem from './TaskListItem';

interface TaskListProps {
    tasks: Task[];
    status: string;
    onChangeTaskStatus: (task: Task, newStatus: string) => void;
}

interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status, onChangeTaskStatus }) => {
    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredTasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TaskListItem
                        task={item}
                        onChangeTaskStatus={onChangeTaskStatus}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default TaskList;
