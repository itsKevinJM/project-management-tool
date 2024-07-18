import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
}

interface TaskListProps {
    tasks: Task[];
    status: string;
    onChangeTaskStatus: (task: Task, newStatus: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status, onChangeTaskStatus }) => {
    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <FlatList
            data={filteredTasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.taskItem}>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <View style={styles.buttonContainer}>
                        {status === 'Todo' && (
                            <Button title="In Progress" onPress={() => onChangeTaskStatus(item, 'In Progress')} />
                        )}
                        {status === 'In Progress' && (
                            <Button title="Finished" onPress={() => onChangeTaskStatus(item, 'Finished')} />
                        )}
                    </View>
                </View>
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
