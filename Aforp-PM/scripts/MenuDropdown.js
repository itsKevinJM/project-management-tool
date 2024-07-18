import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DropdownMenuProps {
    options: string[];
    onSelect: (option: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.button}>
                <Text style={styles.buttonText}>Menu</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdown}>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleSelect(option)}
                            style={styles.dropdownItem}
                        >
                            <Text style={styles.dropdownText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    dropdown: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 3,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    dropdownText: {
        fontSize: 16,
    },
});

export default DropdownMenu;
