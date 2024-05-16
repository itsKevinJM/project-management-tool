import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TaskListItem from "@/components/TaskListItem";
import TaskList from "@/components/TaskList";
import TaskBoard from "@/components/TaskBoard";

export default function App() {
    
  return (
    <SafeAreaView style={styles.container}>
      <TaskBoard />
  

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})