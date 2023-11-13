import { FlatList, StyleSheet, Text, View } from 'react-native'
import {useLayoutEffect} from 'react'
import {MEALS, CATEGORIES} from '../data/dummy-data'
import MealsItem from '../components/mealsList/MealsItem'
import Category from '../models/category'
import MealsList from '../components/mealsList/MealsList'

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

    return <MealsList items={mealItem}/>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({})