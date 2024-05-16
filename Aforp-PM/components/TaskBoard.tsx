import react from 'react';
import { View } from 'react-native';
import TaskList from './TaskList';
import { LinearGradient } from 'expo-linear-gradient';


export default function TaskBoard() {
    return (
        <View style={{ padding: 10 }}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={{ position: 'absolute', top: 0, }}
      />
            <TaskList /> 
        </View>
    );
}

