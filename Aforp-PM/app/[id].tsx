import TaskBoard from "@/components/TaskBoard";
import React from "react";
import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const TaskDetails = () => {
    const { id } = useLocalSearchParams();
    return(
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: 'Détails' }} />
            <Text style={{ color: 'white', fontSize: 20 }}>Id: {id}</Text>
        </View>
    );
};

export default TaskDetails;