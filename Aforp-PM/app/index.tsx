import React from "react";
import TaskBoard from "@/components/TaskBoard";
import { Stack } from "expo-router";

export default function HomeScreen() {
  return (
    <>
    <Stack.Screen options={{ title: 'Aforp project' }} />
      <TaskBoard />;
    </>
  )
}


