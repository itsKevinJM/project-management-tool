import TaskBoard from "@/components/TaskBoard";
import React from "react";
import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useObject } from '@realm/react';
import { Task } from "@/models/Task";
import { BSON, Realm } from 'realm';


const TaskDetails = () => {
    const { id } = useLocalSearchParams();

    const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

    if (!task) {
        return <Text>Not found</Text>;
    }

    return(
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: 'Détails' }} />
            <Text style={{ color: 'white', fontSize: 20 }}>{task.description}</Text>
        </View>
    );
};

export default TaskDetails;