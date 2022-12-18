import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Task from './components/Task/Task'
import appStyle from './App.style'
import Input from './components/Input/Input'

export default function App() {
  const [taskList, setTaskList] = useState([])
  const handleAddTask = (task) => {
    setTaskList([...taskList, task])
  }

  const onDeleteTask = (index) => {
    Alert.alert(
      "Notification",
      "Delete this task",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            let taskLstTemp = [...taskList];
            taskLstTemp.splice(index, 1)
            setTaskList(taskLstTemp)
          }
        }
      ]
    )
  }

  return (
    <View style={appStyle.container}>
      <View style={appStyle.header}>
        <Text style={appStyle.headerText}>To do list</Text>
      </View>
      <ScrollView>
        <View style={appStyle.body}>
          {taskList.map((value, index) => {
            return <Task key={index} title={value} number={index + 1} onDelete={() => onDeleteTask(index)} />
          })}
        </View>
      </ScrollView>
      <Input onAddTask={handleAddTask} />
    </View>
  )
}