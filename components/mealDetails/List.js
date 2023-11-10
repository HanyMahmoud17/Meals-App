import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
    data.map((item) => (
        <View key={item} style={styles.textContainer}>
            <Text style={styles.text}>{item}</Text>
        </View>
      ))
  )
}

export default List

const styles = StyleSheet.create({
    textContainer:{
        backgroundColor:'#e2b497',
        marginHorizontal:26,
        marginVertical:8,
        padding:4,
        borderRadius:12
    },
    text:{
        textAlign:'center',
        color:'#351401'
    }
})