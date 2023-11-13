import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/mealsList/MealsList";
// for context
// import { FavoriteContext } from "../store/context/context";
// for redux

import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
  // context
  // const favoriteMealsCTX = useContext(FavoriteContext);

  // redux
  const  favoriteMealsIds= useSelector((state)=> state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCTX.ids.includes(meal.id)
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length == 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>There is no Favorite Meals Yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:18,
    fontWeight: 'bold',
    color: 'white',
  }
});
