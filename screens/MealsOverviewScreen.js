import { FlatList, StyleSheet, Text, View } from 'react-native'
import {useLayoutEffect} from 'react'
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealsItem from '../components/MealsItem'
import Category from '../models/category'

const MealsOverviewScreen = ({route,navigation}) => {

    const catId=route.params.categoryId
    
    const mealItem= MEALS.filter((item)=> {
        return item.categoryIds.indexOf(catId) >= 0;
    })

    // change the title and i use useLayoutEffect to make the title reload when the screen is load 
    useLayoutEffect(()=>{
      const CategoryTitle=CATEGORIES.find((Category)=> Category.id==catId).title
      // console.log(CategoryTitle);
      navigation.setOptions({
        title: CategoryTitle
      })
    },[catId,navigation])

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