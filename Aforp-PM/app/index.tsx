import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TaskListItem from "@/components/TaskListItem";

export default function App() {
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10 }}>
        <TaskListItem task={{ description: 'First task' }} />
        <TaskListItem task={{ description: 'Second task' }} />
        <TaskListItem task={{ description: 'Third task' }} />
      </View>

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