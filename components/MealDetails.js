import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetails = ({affordability,complexity,duration,textStyle}) => {
  return (
    <View style={styles.details}>
    <Text style={[styles.itemDetail,textStyle]}>{affordability}</Text>
    <Text style={[styles.itemDetail,textStyle]}>{complexity}</Text>
    <Text style={[styles.itemDetail,textStyle]}>{duration}</Text>
  </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
      },
      itemDetail: {
        marginHorizontal: 4,
        fontSize: 12,
      },
})