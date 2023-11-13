import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/mealsList/MealsList";
import { FavoriteContext } from "../store/context/context";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteMealsCTX = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCTX.ids.includes(meal.id)
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
