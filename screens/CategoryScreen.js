import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTitle from "../components/CategoryTitle";

const CategoryScreen = ({ navigation }) => {
  function categoryHandler(itemData) {
    function pressHandler() {
      navigation.navigate("MealOverView",{categoryId: itemData.item.id});
    }
    return (
      <CategoryTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={categoryHandler}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
