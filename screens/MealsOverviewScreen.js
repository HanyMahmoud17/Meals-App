import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Meals} from '../data/dummy-data'

const MealsOverviewScreen = ({route}) => {

    const catId=route.params.categoryId
  return (
    <View>
      <Text>MealsOverviewScreen {catId}</Text>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({})