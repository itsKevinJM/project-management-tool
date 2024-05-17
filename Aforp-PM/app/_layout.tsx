import React from 'react';
import { Slot } from 'expo-router';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        <>
            <Slot />

            <StatusBar style="auto" />
        </>
    ); 
}

