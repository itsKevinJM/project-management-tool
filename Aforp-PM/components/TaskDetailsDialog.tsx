import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

interface Task {
    description: string;
    status: string;
}

interface TaskDetailsDialogProps {
    visible: boolean;
    task: Task | null;
    onClose: () => void;
    onChangeStatus: (status: string) => void;
}

const TaskDetailsDialog: React.FC<TaskDetailsDialogProps> = ({ visible, task, onClose, onChangeStatus }) => {
    if (!task) return null;

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.dialogContainer}>
                    <Text style={styles.title}>Détails de la tâche</Text>
                    <Text style={styles.description}>Description: {task.description}</Text>
                    <Text style={styles.description}>Statut actuel: {task.status}</Text>
                    <View style={styles.buttonContainer}>
                        <Button title="Fermer" onPress={onClose} />
                    </View>
                    {task.status !== 'In Progress' && (
                        <View style={styles.buttonContainer}>
                            <Button title="In Progress" onPress={() => onChangeStatus('In Progress')} />
                        </View>
                    )}
                    {task.status !== 'Finished' && (
                        <View style={styles.buttonContainer}>
                            <Button title="Finished" onPress={() => onChangeStatus('Finished')} />
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialogContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

export default TaskDetailsDialog;
