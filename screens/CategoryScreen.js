import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryTitle from '../components/CategoryTitle'


function categoryHandler(itemData){
    // console.log(item);
  return  <CategoryTitle title={itemData.item.title} color={itemData.item.color} />
}

const CategoryScreen = () => {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id}  renderItem={categoryHandler} />
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})