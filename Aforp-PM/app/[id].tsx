import TaskBoard from "@/components/TaskBoard";
import React from "react";
import { View, Text, TextInput } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useObject, useRealm } from '@realm/react';
import { Task } from "@/models/Task";
import { BSON } from 'realm';
import { useState } from "react";



const TaskDetails = () => {
    const { id } = useLocalSearchParams();
    const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

    const [updatedDescription, setUpdatedDescription] = useState(
        task?.description
);

const realm = useRealm();

const updateDescription = () => {
    if (!task) {
        return;
    }
    realm.write(() => {
        task.description = updateDescription;
    });
};

    if (!task) {
        return <Text>Not found</Text>;
    }

    return(
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: 'Task Détails' }} />

            <TextInput 
                value={updatedDescription}
                onChangeText={setUpdatedDescription}
                onEndEditing={updatedDescription}
                style={{ color: 'white', fontSize: 20 }}
            />
        </View>
    );
};

export default TaskDetails;