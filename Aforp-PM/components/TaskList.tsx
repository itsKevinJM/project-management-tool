import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskListItem from './TaskListItem';
import TaskDetailsDialog from './TaskDetailsDialog';

interface Task {
    description: string;
    status: string;
}

interface TaskListProps {
    tasks: Task[];
    status: string;
    onChangeTaskStatus: (task: Task, status: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, status, onChangeTaskStatus }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const handleTaskPress = (task: Task) => {
        setSelectedTask(task);
        setIsDialogVisible(true);
    };

    const handleChangeStatus = (status: string) => {
        if (selectedTask) {
            onChangeTaskStatus(selectedTask, status);
            setIsDialogVisible(false);
        }
    };

    const filteredTasks = tasks.filter(task => task.status === status);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredTasks}
                contentContainerStyle={{ gap: 5 }}
                renderItem={({ item }) => (
                    <TaskListItem task={item} onPress={handleTaskPress} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <TaskDetailsDialog
                visible={isDialogVisible}
                task={selectedTask}
                onClose={() => setIsDialogVisible(false)}
                onChangeStatus={handleChangeStatus}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        gap: 5,
    },
});

export default TaskList;
