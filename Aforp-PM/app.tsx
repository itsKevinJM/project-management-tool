import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TaskListItem from "@/components/TaskListItem";
import TaskList from "@/components/TaskList";
import TaskBoard from "@/components/TaskBoard";

export default function App() {
    
  return (
    <View style={styles.container}>
      <TaskBoard />
  
      {/* color mobile icon (hour, battery, wifi) */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})