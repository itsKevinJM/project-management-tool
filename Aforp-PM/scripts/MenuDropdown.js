import React, { useState } from 'react';
import { View, StyleSheet, Picker } from 'react-native';

interface MenuDropdownProps {
    onAddTask: () => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ onAddTask }) => {
    const [selectedAction, setSelectedAction] = useState<string | undefined>(undefined);

    const handleActionChange = (itemValue: string) => {
        setSelectedAction(itemValue);
        if (itemValue === 'Ajouter une tâche') {
            onAddTask();
        }
        // Ajoutez ici d'autres actions si nécessaire
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedAction}
                onValueChange={handleActionChange}
                style={styles.picker}
            >
                <Picker.Item label="Sélectionner une action" value="" />
                <Picker.Item label="Ajouter une tâche" value="Ajouter une tâche" />
                <Picker.Item label="Afficher équipe" value="Afficher équipe" />
                <Picker.Item label="Terminer le projet" value="Terminer le projet" />
                <Picker.Item label="Afficher état d’avancement" value="Afficher état d’avancement" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    picker: {
        height: 50,
        width: 250,
    },
});

export default MenuDropdown;
