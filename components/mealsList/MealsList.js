import { StyleSheet, Text, View,FlatList } from "react-native";
import React from "react";
import MealsItem from "./MealsItem";

const MealsList = ({items}) => {
  function renderHandler(itemData) {
    const item = itemData.item;

    const mealDetails = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealsItem {...mealDetails} />;
  }

  return (
    <View>
      {/* <Text>MealsOverviewScreen {catId}</Text> */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderHandler}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({});
