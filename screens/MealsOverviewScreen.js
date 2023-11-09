import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MEALS, Meals} from '../data/dummy-data'
import MealsItem from '../components/MealsItem'

const MealsOverviewScreen = ({route}) => {

    const catId=route.params.categoryId
    
    const mealItem= MEALS.filter((item)=> {
        return item.categoryIds.indexOf(catId) >= 0;
    })

    function renderHandler(itemData){
      const item=itemData.item

      const mealDetails={
        title: item.title,
        imageUrl: item.imageUrl,
        duration: item.duration,
        complexity: item.complexity,
        affordability: item.affordability
      }
        return <MealsItem {...mealDetails}/>
    }

  return (
    <View>
      {/* <Text>MealsOverviewScreen {catId}</Text> */}
      <FlatList data={mealItem} keyExtractor={(item)=> item.id} renderItem={renderHandler} />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({})