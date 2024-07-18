import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface TaskFormDialogProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (task: Task) => void;
}

interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
}

const TaskFormDialog: React.FC<TaskFormDialogProps> = ({ visible, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [status, setStatus] = useState('Todo');

    const handleSubmit = () => {
        onSubmit({ name, description, startDate, endDate, status });
        onClose();
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.dialogContainer}>
                    <Text style={styles.title}>Ajouter une tâche</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                    />
                    <View style={styles.dateContainer}>
                        <Text>Date de début:</Text>
                        <DateTimePicker
                            value={startDate}
                            mode="date"
                            display="default"
                            onChange={(event, date) => date && setStartDate(date)}
                        />
                    </View>
                    <View style={styles.dateContainer}>
                        <Text>Date de fin:</Text>
                        <DateTimePicker
                            value={endDate}
                            mode="date"
                            display="default"
                            onChange={(event, date) => date && setEndDate(date)}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Annuler" onPress={onClose} />
                        <Button title="Ajouter" onPress={handleSubmit} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

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
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#EDEDED',
        borderRadius: 5,
    },
    dateContainer: {
        width: '100%',
        marginBottom: 10,
        alignItems: 'flex-start',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
    },
});

export default TaskFormDialog;
