import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Task {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
    priority: string;
    teamMembers: string[];
}

interface TaskFormDialogProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (task: Task) => void;
}

const TaskFormDialog: React.FC<TaskFormDialogProps> = ({ visible, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [priority, setPriority] = useState('');
    const [teamMembers, setTeamMembers] = useState('');
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const handleAddTask = () => {
        onSubmit({
            name,
            description,
            startDate,
            endDate,
            status: 'Todo',
            priority,
            teamMembers: teamMembers.split(',').map(member => member.trim()),
        });
        onClose();
    };

    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Ajouter une tâche</Text>
                    <TextInput
                        placeholder="Nom"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Priorité"
                        value={priority}
                        onChangeText={setPriority}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Membres de l'équipe (séparés par des virgules)"
                        value={teamMembers}
                        onChangeText={setTeamMembers}
                        style={styles.input}
                    />
                    <Button title="Date de début" onPress={() => setShowStartDatePicker(true)} />
                    {showStartDatePicker && (
                        <DateTimePicker
                            value={startDate}
                            mode="date"
                            display="default"
                            onChange={(event, date) => {
                                setShowStartDatePicker(false);
                                if (date) {
                                    setStartDate(date);
                                }
                            }}
                        />
                    )}
                    <Button title="Date de fin" onPress={() => setShowEndDatePicker(true)} />
                    {showEndDatePicker && (
                        <DateTimePicker
                            value={endDate}
                            mode="date"
                            display="default"
                            onChange={(event, date) => {
                                setShowEndDatePicker(false);
                                if (date) {
                                    setEndDate(date);
                                }
                            }}
                        />
                    )}
                    <View style={styles.buttonRow}>
                        <Button title="Annuler" onPress={onClose} />
                        <Button title="Ajouter" onPress={handleAddTask} />
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
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default TaskFormDialog;
