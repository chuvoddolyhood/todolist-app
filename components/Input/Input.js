import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useState } from 'react'
import inputStyle from './Input.style'

export default function Input(props) {
    const [task, setTask] = useState("")

    const addTask = () => {
        if (task.length === 0) {
            alert("Please to input your task")
            return false;
        }
        props.onAddTask(task)
        setTask('')
        Keyboard.dismiss() //hide keyboard
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={inputStyle.addTask}>
            <TextInput
                value={task}
                style={inputStyle.input}
                placeholder="Your task"
                placeholderTextColor="#21a3d0"
                onChangeText={text => setTask(text)}
            />
            <TouchableOpacity onPress={addTask}>
                <View style={inputStyle.iconWrapper}>
                    <Text style={inputStyle.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}