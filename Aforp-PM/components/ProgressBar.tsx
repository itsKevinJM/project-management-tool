// components/ProgressBar.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
    progress: number; // Progress value between 0 and 1
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
            <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${progress * 100}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
    },
    progressText: {
        marginBottom: 10,
        fontSize: 16,
        color: 'black',
    },
    progressBar: {
        width: '100%',
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: '#007bff',
        borderRadius: 10,
    },
});

export default ProgressBar;
