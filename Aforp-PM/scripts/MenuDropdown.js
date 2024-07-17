import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MenuDropdown() {
    const [selectedAction, setSelectedAction] = useState('');

    const handleActionChange = (itemValue) => {
        setSelectedAction(itemValue);
        // Ajoutez ici la logique pour gérer chaque action
        switch (itemValue) {
            case 'ajouterTache':
                // logique pour ajouter une tâche
                break;
            case 'afficherEquipe':
                // logique pour afficher l'équipe
                break;
            case 'terminerProjet':
                // logique pour terminer le projet
                break;
            case 'afficherEtat':
                // logique pour afficher l'état d'avancement
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedAction}
                style={styles.picker}
                onValueChange={handleActionChange}
            >
                <Picker.Item label="Sélectionner une action" value="" />
                <Picker.Item label="Ajouter une tâche" value="ajouterTache" />
                <Picker.Item label="Afficher équipe" value="afficherEquipe" />
                <Picker.Item label="Terminer le projet" value="terminerProjet" />
                <Picker.Item label="Afficher état d’avancement" value="afficherEtat" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    picker: {
        height: 50,
        width: '100%',
    },
});
