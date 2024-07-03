import React from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import TaskList from './TaskList';
import { LinearGradient } from 'expo-linear-gradient';
import Monfond from '../assets/images/fond-ecran-wallpaper-noir.png';

export default function TaskBoard() {
    return (
        <ImageBackground source={Monfond} style={styles.backgroundImage}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(255, 182, 193, 0.5)', 'rgba(255, 140, 0, 0.5)', 'rgba(128, 0, 128, 0.5)', 'rgba(0, 0, 255, 0.5)']}
                style={StyleSheet.absoluteFill}
            />
            <SafeAreaView style={styles.safeArea}>
                <TaskList /> 
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    safeArea: {
        flex: 1,
        padding: 10,
    },
});
