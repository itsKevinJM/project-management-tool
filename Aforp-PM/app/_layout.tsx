import React from 'react';
import { Slot, Stack } from 'expo-router';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import Realm from '@/providers/Realm';

export default function RootLayout() {
    return (
        <>
        <ThemeProvider value={DarkTheme}>
            <Realm>
                {/* screenOptions for top bar title (title page) */}
                <Stack screenOptions={{}}></Stack>
            </Realm>
        
        </ThemeProvider>
            <StatusBar style="light" />
        </>
    ); 
}

