import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    textContainer:{
        marginHorizontal:26,
        marginVertical:8,
        padding:8,
        borderBottomWidth:2,
        borderBottomColor:'#e2b497',
      },
      textStyle:{
        fontSize:16,
        color:'#e2b497',
        textAlign:'center',
      }
})