import React from 'react';
import { Slot, Stack } from 'expo-router';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';

export default function RootLayout() {
    return (
        <ThemeProvider value={DarkTheme}>
            {/* screenOptions for top bar title (title page) */}
            <Stack screenOptions={{}}></Stack>
        
            <StatusBar style="light" />
        </ThemeProvider>
    ); 
}

