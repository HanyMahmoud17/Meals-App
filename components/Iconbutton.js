import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Iconbutton = ({icon,color,onPress}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.press}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default Iconbutton

const styles = StyleSheet.create({
    press:{
        opacity:0.7
    }
})