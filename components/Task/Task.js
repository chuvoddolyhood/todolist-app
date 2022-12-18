import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import TaskStyle from './Task.style'

export default function Task({ title, number, onDelete }) {
    const numberCustom = number < 10 ? `0${number}` : number
    const numberStyleBG = number % 2 ? TaskStyle.even : TaskStyle.odd

    return (
        <TouchableOpacity onPress={onDelete}>
            <View style={TaskStyle.item}>
                <View style={[TaskStyle.square, numberStyleBG]}>
                    <Text style={TaskStyle.number}>{numberCustom}</Text>
                </View>
                <Text style={TaskStyle.content}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}