import React from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import TaskList from './TaskList';
import { LinearGradient } from 'expo-linear-gradient';
import Monfond from '../assets/images/fond-ecran-wallpaper-noir.png';

export default function TaskBoard() {
    return (
        <ImageBackground source={Monfond} style={styles.backgroundImage}>
            <SafeAreaView style={styles.safeArea}>
                <View style={{ padding: 10, flex: 1 }}>
                    <TaskList /> 
                </View>
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